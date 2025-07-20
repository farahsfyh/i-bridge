# Supabase Database Setup

This directory contains the database schema and setup instructions for the i-Bridge application.

## Database Setup Instructions

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note down your project URL and anon key

### 2. Run Database Schema
1. Go to your Supabase project dashboard
2. Navigate to the **SQL Editor**
3. Copy and paste the contents of `schema.sql` into the editor
4. Click **Run** to execute the schema

### 3. Configure Environment Variables
Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 4. Database Tables Created

#### `profiles` table
- Stores user profile information
- Automatically created when users sign up
- Includes user type (employer/service_provider)

#### `skills` table
- Stores available skills and categories
- Pre-populated with sample data
- Used for the skills directory

#### `contact_submissions` table
- Stores contact form submissions
- Public insert access for form submissions

### 5. Row Level Security (RLS)
- All tables have RLS enabled
- Users can only access their own profile data
- Skills are publicly readable
- Contact submissions are publicly insertable

### 6. Triggers
- Automatic profile creation on user signup
- Handles user_type from auth metadata

## Troubleshooting

### "Error creating profile" Issue
If you see this error, it means the database schema hasn't been set up properly. Follow the setup instructions above.

### Permission Denied Errors
Make sure RLS policies are properly configured by running the schema.sql file.

### Connection Issues
Verify your environment variables are correct and the Supabase project is active. 