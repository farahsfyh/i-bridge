-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT NOT NULL,
    full_name TEXT,
    user_type TEXT CHECK (user_type IN ('employer', 'service_provider')) NOT NULL,
    phone TEXT,
    location TEXT,
    bio TEXT,
    skills TEXT[],
    rating DECIMAL(3,2) CHECK (rating >= 0 AND rating <= 5),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS public.skills (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    icon TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles table
CREATE POLICY "Users can view their own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Create RLS policies for skills table (public read access)
CREATE POLICY "Anyone can view skills" ON public.skills
    FOR SELECT USING (true);

-- Create RLS policies for contact_submissions table (public insert access)
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions
    FOR INSERT WITH CHECK (true);

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, user_type, created_at, updated_at)
    VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'user_type', 'employer'), NOW(), NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile on user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_user_type ON public.profiles(user_type);
CREATE INDEX IF NOT EXISTS idx_profiles_location ON public.profiles(location);
CREATE INDEX IF NOT EXISTS idx_skills_category ON public.skills(category);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at);

-- Insert some sample skills data
INSERT INTO public.skills (name, category, description, icon) VALUES
('House Cleaning', 'Home Services', 'Professional house cleaning and maintenance services', '🏠'),
('Plumbing', 'Home Services', 'Expert plumbing repairs and installations', '🔧'),
('Electrical Work', 'Home Services', 'Electrical repairs and installations', '⚡'),
('Woodworking', 'Traditional Crafts', 'Custom woodworking and furniture making', '🪵'),
('Pottery', 'Traditional Crafts', 'Handcrafted pottery and ceramics', '🏺'),
('Textile Arts', 'Traditional Crafts', 'Weaving, knitting, and textile crafts', '🧶'),
('Gardening', 'Gardening & Farming', 'Landscaping and garden maintenance', '🌱'),
('Organic Farming', 'Gardening & Farming', 'Sustainable farming and agriculture', '🌾'),
('Tailoring', 'Tailoring & Fashion', 'Custom clothing and alterations', '👗'),
('Fashion Design', 'Tailoring & Fashion', 'Custom fashion design and creation', '🎨'),
('Electronics Repair', 'Repairs', 'Electronics and device repairs', '📱'),
('Computer Repair', 'Repairs', 'Computer and laptop repairs', '💻'),
('Interior Design', 'Art & Design', 'Interior design and decoration', '🏠'),
('Custom Artwork', 'Art & Design', 'Custom paintings and artwork', '🎭')
ON CONFLICT (name) DO NOTHING; 