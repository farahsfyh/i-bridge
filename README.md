# i-Bridge - Connect with Trusted Local Talent

i-Bridge is a modern platform connecting communities with skilled professionals in traditional crafts, home services, and essential skills. Find trusted local talent or offer your expertise to your community.

## 🚀 Features

- **User Authentication**: Secure sign-up and sign-in with Supabase
- **User Types**: Support for both employers and service providers
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: Next.js 15, TypeScript, and Supabase
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliant
- **Contact Forms**: Integrated contact submission system

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS 3.14
- **Backend**: Supabase (Database, Authentication, Storage)
- **Deployment**: Netlify
- **Icons**: Emoji icons (placeholder for production)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd i-bridge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp env.example .env.local
```

Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Set Up Supabase Database

1. Create a new Supabase project
2. Run the following SQL to create the required tables:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  user_type TEXT CHECK (user_type IN ('employer', 'service_provider')) NOT NULL,
  phone TEXT,
  location TEXT,
  bio TEXT,
  skills TEXT[],
  rating DECIMAL(3,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create skills table
CREATE TABLE skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Anyone can view skills" ON skills
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert contact submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── auth/              # Authentication components
│   ├── common/            # Common components (Navigation)
│   ├── forms/             # Form components
│   ├── sections/          # Page sections
│   └── ui/                # UI components
├── contexts/              # React contexts
├── lib/                   # Utilities and configurations
└── types/                 # TypeScript type definitions
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured with Next.js rules
- **Prettier**: Code formatting
- **Accessibility**: WCAG 2.1 AA compliance
- **Responsive**: Mobile-first design

## 🚀 Deployment

### Deploy to Netlify

1. **Connect Repository**: Connect your GitHub repository to Netlify
2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Environment Variables**: Add your Supabase environment variables
4. **Deploy**: Netlify will automatically deploy on push to main branch

### Environment Variables for Production

Set these in your Netlify environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Custom Domain Setup

1. Add custom domain in Netlify dashboard
2. Configure DNS records
3. Enable SSL certificate (automatic with Netlify)

## 🔒 Security

- **Authentication**: Supabase Auth with email/password
- **Database**: Row Level Security (RLS) enabled
- **Environment Variables**: Secure handling of sensitive data
- **HTTPS**: Enforced in production
- **Security Headers**: Configured in netlify.toml

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile**: 320px+ (single column layouts)
- **Tablet**: 768px+ (2-column grids)
- **Desktop**: 1024px+ (multi-column layouts)
- **Large Desktop**: 1280px+ (full-width optimized)

## ♿ Accessibility

- **WCAG 2.1 AA Compliance**: All components meet accessibility standards
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Descriptive labels for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG AA compliant color ratios

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS with a custom design system:

- **Primary Colors**: Brand colors for main elements
- **Accent Colors**: Secondary colors for highlights
- **Typography**: Consistent font hierarchy
- **Spacing**: Systematic spacing scale

### Supabase Configuration

- **Authentication**: Email/password with user type selection
- **Database**: PostgreSQL with RLS policies
- **Real-time**: Subscription support for live updates
- **Storage**: File upload capabilities (ready for implementation)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- **Email**: hello@i-bridge.com
- **Documentation**: [Link to docs]
- **Issues**: [GitHub Issues]

## 🗺️ Roadmap

- [ ] User profile management
- [ ] Skill marketplace
- [ ] Booking system
- [ ] Payment integration
- [ ] Review system
- [ ] Mobile app
- [ ] Advanced search
- [ ] Real-time messaging

---

Built with ❤️ for connecting communities with local talent.
