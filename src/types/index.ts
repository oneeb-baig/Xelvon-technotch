export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: {
    title: string;
    description: string;
    href: string;
    icon?: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  icon: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
