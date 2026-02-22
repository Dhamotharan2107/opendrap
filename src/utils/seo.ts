import { COMPANY_INFO, SEO_CONFIG } from '../constants';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_INFO.name,
  description: COMPANY_INFO.description,
  url: COMPANY_INFO.url,
  logo: COMPANY_INFO.logo,
  email: COMPANY_INFO.email,
  telephone: COMPANY_INFO.phoneFormatted,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  foundingDate: COMPANY_INFO.foundingDate,
  sameAs: [
    'https://twitter.com/opendrap',
    'https://linkedin.com/company/opendrap',
  ],
});

export const generateWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: COMPANY_INFO.name,
  url: COMPANY_INFO.url,
  description: COMPANY_INFO.description,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${COMPANY_INFO.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

export const generateProductSchema = (product: {
  name: string;
  description: string;
  image?: string;
  price?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image || SEO_CONFIG.defaultImage,
  brand: {
    '@type': 'Brand',
    name: COMPANY_INFO.name,
  },
  offers: product.price ? {
    '@type': 'Offer',
    price: product.price,
    priceCurrency: 'USD',
  } : undefined,
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const getCanonicalUrl = (path: string): string => {
  return `${SEO_CONFIG.siteUrl}${path}`;
};