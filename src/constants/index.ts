// API endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
} as const;

// Navigation links
export const NAV_LINKS = [
  { name: 'Home',     path: '/'         },
  { name: 'Products', path: '/products' },
  { name: 'Pricing',  path: '/pricing'  },
  { name: 'Contact',  path: '/contact'  },
] as const;

// Company information
export const COMPANY_INFO = {
  name:             'OPENDRAP',
  email:            'office.opendrap@gmail.com',
  phone:            '8072620523',
  phoneFormatted:   '+91 807-262-0523',
  location:         'Chennai, Tamil Nadu, India',
  tagline:          'AI-Powered WhatsApp Automation & Business Solutions',
  description:      'OPENDRAP delivers AI-powered WhatsApp agents, voice calling bots, website development, and business automation to help companies automate, scale, and grow faster.',
  url:              'https://opendrap.com',
  logo:             'https://opendrap.com/logo.png',
  foundingDate:     '2024',
} as const;

// Theme colors
export const THEME_COLORS = {
  primary:       '#002E6E',
  primaryHover:  '#001f4d',
  secondary:     '#00B9F1',
  whatsapp:      '#25D366',
  success:       '#10B981',
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle:       'OPENDRAP — AI-Powered WhatsApp Automation & Business Solutions',
  titleTemplate:      '%s | OPENDRAP',
  defaultDescription: 'Deploy WhatsApp AI agents, voice calling bots, and business automation. Get your website fixed free with a 7-day trial. No credit card required. Chennai, India.',
  siteUrl:            'https://opendrap.com',
  defaultImage:       'https://opendrap.com/og-image.jpg',
  twitterHandle:      '@opendrap',
  keywords: [
    'WhatsApp AI agent India',
    'WhatsApp business automation',
    'AI chatbot WhatsApp',
    'voice calling AI bot',
    'business automation Chennai',
    'website development India',
    'AI customer support automation',
    'WhatsApp API automation',
    'OPENDRAP AI platform',
    'website maintenance India',
    'AI agent for business',
    'chatbot development Chennai',
    'AI voice bot India',
    'WhatsApp marketing automation',
  ],
} as const;
