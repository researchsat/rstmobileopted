import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords = [],
  ogImage = '/src/assets/images/og-image.jpg',
  ogType = 'website',
  canonical,
  structuredData,
  author = 'ResearchSat Team',
  publishedAt,
  modifiedAt,
  noindex = false
}) => {
  // Default site title suffix
  const siteName = 'ResearchSat';

  // Format the full title
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  // Default description if none provided
  const defaultDescription = 'ResearchSat provides microgravity research solutions for space biology research, offering custom satellite payloads and mission services.';

  // Use provided description or default
  const metaDescription = description || defaultDescription;

  // Default keywords
  const defaultKeywords = ['space biology', 'microgravity research', 'satellite payloads', 'space missions'];

  // Combine default and provided keywords
  const metaKeywords = [...defaultKeywords, ...keywords].join(', ');

  // Current URL for canonical link if not provided
  const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags for Accessibility and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="theme-color" content="#17242D" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      {/* If article, add published and modified dates */}
      {publishedAt && <meta property="article:published_time" content={publishedAt} />}
      {modifiedAt && <meta property="article:modified_time" content={modifiedAt} />}

      {/* Structured Data for SEO */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
