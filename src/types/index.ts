// Blog Types
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime?: string;
  content?: string;
}

// Contact Form Types
export interface ContactForm {
  name: string;    // 선택 — 비우면 '' 로 저장
  email: string;   // 선택 — 답장 원할 때만
  school: string;  // 선택
  title: string;   // 필수
  message: string; // 필수
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
    email?: string;
  };
}
