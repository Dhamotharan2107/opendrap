// API endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
} as const;

// Navigation links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
] as const;

// Company information
export const COMPANY_INFO = {
  name: 'OPENDRAP',
  email: 'office.opendrap@gmail.com',
  phone: '8072620523',
  phoneFormatted: '+91 807-262-0523',
  location: 'Chennai, Tamil Nadu, India',
  tagline: 'Open Dynamic Research and AI Platform',
  description: 'AI-powered business solutions that help companies automate, scale, and grow with intelligent WhatsApp agents, voice AI, and business automation.',
  url: 'https://opendrap.com',
  logo: 'https://opendrap.com/logo.png',
  foundingDate: '2024',
} as const;

// Theme colors
export const THEME_COLORS = {
  primary: '#002E6E',
  primaryHover: '#001f4d',
  secondary: '#00B9F1',
  success: '#10B981',
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: 'OPENDRAP - AI-Powered Business Automation Solutions',
  titleTemplate: '%s | OPENDRAP',
  defaultDescription: 'Transform your business with AI-powered automation. WhatsApp AI agents, voice calling AI, chatbots, and business automation solutions for modern enterprises.',
  siteUrl: 'https://opendrap.com',
  defaultImage: 'https://opendrap.com/og-image.jpg',
  twitterHandle: '@opendrap',
  keywords: [
    'AI automation',
    'WhatsApp AI agent',
    'voice AI',
    'business automation',
    'chatbot platform',
    'AI solutions',
    'customer service automation',
    'enterprise AI',
  ],
} as const;