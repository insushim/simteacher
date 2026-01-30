// Blog Types
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  thumbnail?: string;
  readingTime?: string;
  content?: string;
}

// Portfolio Types
export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  thumbnail?: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
  content?: string;
}

// Lecture Types
export interface Lecture {
  id: string;
  title: string;
  description: string;
  duration: string;
  target: string;
  topics: string[];
  price?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  avatar?: string;
}

// Notice Types (학급 홈페이지)
export interface Notice {
  id: string;
  title: string;
  content: string;
  category: 'notice' | 'homework' | 'event';
  createdAt: Date;
  updatedAt?: Date;
  isPinned?: boolean;
  attachments?: string[];
}

// School Meal Types
export interface SchoolMeal {
  date: string;
  breakfast?: string[];
  lunch?: string[];
  dinner?: string[];
  calorie?: string;
}

// Contact Form Types
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type: 'lecture' | 'consulting' | 'collaboration' | 'other';
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Site Config Types
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github?: string;
    twitter?: string;
    youtube?: string;
    instagram?: string;
    email?: string;
  };
}
