export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

export interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  canonicalURL?: string;
}
