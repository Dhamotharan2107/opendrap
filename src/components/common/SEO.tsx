import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG, COMPANY_INFO } from '../../constants';
import { getCanonicalUrl, type SEOData } from '../../utils/seo';

interface SEOProps extends SEOData {
  children?: React.ReactNode;
  schemaMarkup?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = SEO_CONFIG.keywords,
  image = SEO_CONFIG.defaultImage,
  url,
  type = 'website',
  author = COMPANY_INFO.name,
  publishedTime,
  modifiedTime,
  children,
  schemaMarkup,
}) => {
  const fullTitle = title === SEO_CONFIG.defaultTitle 
    ? title 
    : `${title} | ${COMPANY_INFO.name}`;
  
  const canonicalUrl = url ? getCanonicalUrl(url) : SEO_CONFIG.siteUrl;
  const imageUrl = image.startsWith('http') ? image : `${SEO_CONFIG.siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content={SEO_CONFIG.twitterHandle} />
      <meta name="twitter:creator" content={SEO_CONFIG.twitterHandle} />

      {/* Article specific tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Structured Data */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schemaMarkup) ? schemaMarkup : [schemaMarkup])}
        </script>
      )}

      {children}
    </Helmet>
  );
};