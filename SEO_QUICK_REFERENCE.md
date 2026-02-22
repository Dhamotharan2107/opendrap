# SEO Quick Reference Card

## 🚀 Installation

```bash
npm install react-helmet-async
```

## 📝 Basic Page SEO Template

```tsx
import { SEO } from '../../components/common/SEO';
import { SEO_CONFIG } from '../../constants';
import { generateBreadcrumbSchema } from '../../utils/seo';

export const MyPage: React.FC = () => {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: SEO_CONFIG.siteUrl },
    { name: 'Page Name', url: `${SEO_CONFIG.siteUrl}/page` },
  ]);

  return (
    <>
      <SEO
        title="Page Title - Keep Under 60 Characters"
        description="Page description for search engines. Keep between 150-160 characters for optimal display."
        url="/page-url"
        keywords={['keyword1', 'keyword2', 'keyword3']}
        schemaMarkup={breadcrumb}
      />
      
      <article>
        <header>
          <h1>Only One H1 Per Page</h1>
        </header>
        
        <section>
          <h2>Section Heading</h2>
          <p>Content...</p>
        </section>
      </article>
    </>
  );
};
```

## 🏷️ Meta Tags Checklist

```html
<!-- Essential -->
✅ <title>Unique Title | Brand</title>
✅ <meta name="description" content="150-160 chars" />
✅ <meta name="keywords" content="keyword1, keyword2" />
✅ <link rel="canonical" href="https://site.com/page" />

<!-- Open Graph -->
✅ <meta property="og:title" content="Title" />
✅ <meta property="og:description" content="Description" />
✅ <meta property="og:image" content="1200x630px image" />
✅ <meta property="og:url" content="https://site.com/page" />
✅ <meta property="og:type" content="website" />

<!-- Twitter -->
✅ <meta name="twitter:card" content="summary_large_image" />
✅ <meta name="twitter:title" content="Title" />
✅ <meta name="twitter:description" content="Description" />
✅ <meta name="twitter:image" content="Image URL" />
```

## 🎯 Structured Data Examples

### Organization
```tsx
import { generateOrganizationSchema } from '../../utils/seo';

const schema = generateOrganizationSchema();
// Add to SEO component: schemaMarkup={schema}
```

### Product
```tsx
import { generateProductSchema } from '../../utils/seo';

const productSchema = generateProductSchema({
  name: 'Product Name',
  description: 'Product description',
  image: '/product-image.jpg',
  price: '99.00',
});
```

### Breadcrumb
```tsx
import { generateBreadcrumbSchema } from '../../utils/seo';

const breadcrumb = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://site.com' },
  { name: 'Category', url: 'https://site.com/category' },
  { name: 'Product', url: 'https://site.com/category/product' },
]);
```

## 🖼️ Image Optimization

```tsx
// Always include alt text
<ImageWithFallback
  src="/image.jpg"
  alt="Descriptive alt text for accessibility and SEO"
  width={800}
  height={600}
  loading="lazy"
  className="w-full h-auto"
/>

// Responsive images
<picture>
  <source media="(max-width: 768px)" srcSet="/mobile.webp" />
  <source media="(min-width: 769px)" srcSet="/desktop.webp" />
  <img src="/desktop.webp" alt="Description" />
</picture>
```

## 📱 Semantic HTML Structure

```tsx
<article>
  <header>
    <h1>Main Page Title</h1>
    <p>Subtitle or description</p>
  </header>

  <section aria-labelledby="section1">
    <h2 id="section1">Section Title</h2>
    <p>Content...</p>
  </section>

  <section aria-labelledby="section2">
    <h2 id="section2">Another Section</h2>
    <p>Content...</p>
  </section>

  <footer>
    <p>Article footer content</p>
  </footer>
</article>
```

## ♿ Accessibility Quick Checks

```tsx
// Navigation
<nav aria-label="Main navigation">
  <Link to="/" aria-current={isActive ? "page" : undefined}>
    Home
  </Link>
</nav>

// Buttons
<button aria-label="Close menu" aria-expanded={isOpen}>
  <X aria-hidden="true" />
</button>

// Images
<img src="..." alt="Descriptive text" />
<div role="img" aria-label="Description">
  <Icon aria-hidden="true" />
</div>

// Forms
<label htmlFor="email">Email</label>
<input
  id="email"
  type="email"
  aria-describedby="email-error"
  required
/>
<span id="email-error" role="alert">Error message</span>
```

## 📊 Performance Optimization

```tsx
// Lazy loading
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<LoadingSpinner />}>
  <HeavyComponent />
</Suspense>

// Memoization
const MemoizedComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});

// Callbacks
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies]);

// Computed values
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);
```

## 🔍 SEO Best Practices

### Title Tags
- ✅ 50-60 characters
- ✅ Include primary keyword
- ✅ Unique per page
- ✅ Brand name at end
- ❌ Don't keyword stuff

### Meta Descriptions
- ✅ 150-160 characters
- ✅ Include call-to-action
- ✅ Unique per page
- ✅ Include target keyword
- ❌ Don't duplicate

### Headings
- ✅ One H1 per page
- ✅ Logical hierarchy (H1 → H2 → H3)
- ✅ Include keywords naturally
- ❌ Don't skip levels

### URLs
- ✅ Short and descriptive
- ✅ Use hyphens, not underscores
- ✅ Include keywords
- ✅ Lowercase only
- ❌ Avoid parameters when possible

### Images
- ✅ Descriptive alt text
- ✅ Optimized file size
- ✅ WebP format
- ✅ Lazy loading
- ✅ Responsive

## 📈 Monitoring

```bash
# Check indexing
site:opendrap.com

# Check specific page
site:opendrap.com/products

# Check title
intitle:"OPENDRAP"

# Check backlinks
link:opendrap.com
```

## 🎯 Priority Actions

**Day 1:**
1. Install react-helmet-async
2. Add SEO component to all pages
3. Create OG image (1200x630px)
4. Submit sitemap to Google

**Week 1:**
1. Optimize all images
2. Add alt text everywhere
3. Fix heading hierarchy
4. Set up Google Analytics

**Month 1:**
1. Create 10 blog posts
2. Build 5 quality backlinks
3. Optimize page speed
4. Monitor rankings

## 📞 Support

- **Documentation**: See SEO_GUIDE.md
- **Implementation**: See SEO_IMPLEMENTATION_SUMMARY.md
- **Performance**: See CORE_WEB_VITALS.md

---

**Keep this card handy for quick SEO reference! 🚀**