// User types
export interface User {
  id: string
  email: string
  name: string
  role: 'employer' | 'craftsperson'
  skills?: string[]
  location?: string
  bio?: string
  avatar_url?: string
  created_at: string
}

// Job/Project types
export interface Job {
  id: string
  title: string
  description: string
  employer_id: string
  category: string
  skills_required: string[]
  location: string
  budget_range: {
    min: number
    max: number
  }
  status: 'open' | 'in_progress' | 'completed'
  created_at: string
  updated_at: string
}

// Craft/Service categories
export interface Category {
  id: string
  name: string
  description: string
  icon?: string
}

// Application types
export interface Application {
  id: string
  job_id: string
  craftsperson_id: string
  cover_letter: string
  portfolio_url?: string
  status: 'pending' | 'accepted' | 'rejected'
  created_at: string
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  external?: boolean
} 