import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = 'https://www.yaqeel.com/assets/yaqeel-banner.png',
  noindex = false,
}) => {
  useEffect(() => {
    // 1. Document Title
    document.title = title;

    // Helper to get or create meta tag
    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Robots noindex
    let robots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'noindex, follow');
    } else if (robots) {
      robots.setAttribute('content', 'index, follow');
    }

    // 2. Standard Meta
    setMeta('name', 'description', description);

    // 3. Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    if (ogImage) setMeta('property', 'og:image', ogImage);

    // 4. Twitter Card
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    if (ogImage) setMeta('name', 'twitter:image', ogImage);

    // 5. Canonical Link
    if (canonical) {
      let canonLink = document.querySelector('link[rel="canonical"]');
      if (!canonLink) {
        canonLink = document.createElement('link');
        canonLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonLink);
      }
      canonLink.setAttribute('href', canonical);
      setMeta('property', 'og:url', canonical);
      setMeta('name', 'twitter:url', canonical);
    }
  }, [title, description, canonical, ogImage]);

  return null;
};
