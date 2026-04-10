// API endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
} as const;

// Navigation links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Our Work', path: '/our-work' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
] as const;

// Company information
export const COMPANY_INFO = {
  name: 'OPENDRAP',
  email: 'info@opendrap.website',
  phone: '8072620523',
  phoneFormatted: '+91 807-262-0523',
  location: 'Chennai, Tamil Nadu, India',
  tagline: 'AI-Powered WhatsApp Automation & Business Solutions',
  description: 'OPENDRAP delivers AI-powered WhatsApp agents, website development, and business automation to help companies automate, scale, and grow faster.',
  url: 'https://opendrap.com',
  logo: 'https://opendrap.website/logo.png',
  foundingDate: '2024',
} as const;

// Theme colors
export const THEME_COLORS = {
  bg: '#0B0F1A',
  primary: '#1E90FF',
  primaryHover: '#1a7de0',
  accent: '#00FFC6',
  accentHover: '#00e6b0',
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0B0',
  whatsapp: '#25D366',
  success: '#10B981',
  btnGradFrom: '#1E90FF',
  btnGradTo: '#00FFC6',
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: 'OPENDRAP — AI-Powered WhatsApp Automation & Business Solutions',
  titleTemplate: '%s | OPENDRAP',
  defaultDescription: 'Deploy WhatsApp AI agents and business automation. Get your website fixed free with a 7-day free trial. No credit card required. Chennai, India.',
  siteUrl: 'https://opendrap.com',
  defaultImage: 'https://opendrap.website/og-image.jpg',
  twitterHandle: '@opendrap',
  keywords: [
    'WhatsApp AI agent India',
    'WhatsApp business automation',
    'AI chatbot WhatsApp',
    'business automation Chennai',
    'website development India',
    'AI customer support automation',
    'WhatsApp API automation',
    'OPENDRAP AI platform',
    'website maintenance India',
    'AI agent for business',
    'chatbot development Chennai',
    'WhatsApp marketing automation',
  ],
} as const;
