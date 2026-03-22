# Core Web Vitals Optimization Guide

## 🎯 What are Core Web Vitals?

Google's Core Web Vitals are essential metrics for measuring user experience:

1. **LCP (Largest Contentful Paint)**: Loading performance - should be < 2.5s
2. **FID (First Input Delay)**: Interactivity - should be < 100ms
3. **CLS (Cumulative Layout Shift)**: Visual stability - should be < 0.1

## ⚡ Current Optimizations Implemented

### 1. Image Optimization
```tsx
// Lazy loading
<ImageWithFallback
  src="image.jpg"
  alt="Description"
  loading="lazy"  // ✅ Already implemented
/>

// React.memo to prevent re-renders
export const ImageWithFallback = React.memo(({ ... }) => {
  // Component logic
});
```

### 2. Code Splitting
```tsx
// Lazy load routes
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));

// Wrap with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/products" element={<Products />} />
  </Routes>
</Suspense>
```

### 3. Performance Hooks
```tsx
// useCallback for event handlers
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies]);

// useMemo for expensive computations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);
```

## 🚀 Additional Optimizations Needed

### 1. Improve LCP (Largest Contentful Paint)

#### A. Optimize Images
```bash
# Convert images to WebP
npm install sharp

# Create optimization script
node scripts/optimize-images.js
```

```javascript
// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const optimizeImage = async (inputPath, outputPath) => {
  await sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath);
};
```

#### B. Preload Critical Resources
```html
<!-- In index.html -->
<link rel="preload" as="image" href="/hero-image.webp" />
<link rel="preload" as="font" href="/fonts/inter.woff2" crossorigin />
```

#### C. Use CDN for Images
```tsx
// Use Cloudinary, Imgix, or similar
const imageUrl = `https://res.cloudinary.com/your-cloud/image/upload/w_800,q_auto,f_auto/hero.jpg`;
```

### 2. Improve FID (First Input Delay)

#### A. Code Splitting by Route
```tsx
// src/app/routes.ts
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "contact", Component: Contact },
    ],
  },
]);
```

#### B. Defer Non-Critical JavaScript
```html
<!-- In index.html -->
<script defer src="/analytics.js"></script>
<script defer src="/chat-widget.js"></script>
```

#### C. Reduce JavaScript Bundle Size
```bash
# Analyze bundle
npm install --save-dev vite-plugin-bundle-analyzer

# Add to vite.config.ts
import { visualizer } from 'vite-plugin-bundle-analyzer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }),
  ],
});
```

### 3. Improve CLS (Cumulative Layout Shift)

#### A. Set Image Dimensions
```tsx
// Always specify width and height
<ImageWithFallback
  src="image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="w-full h-auto"
/>
```

#### B. Reserve Space for Dynamic Content
```css
/* Reserve space for ads or dynamic content */
.ad-container {
  min-height: 250px;
  background: #f0f0f0;
}
```

#### C. Use CSS Aspect Ratio
```css
/* Maintain aspect ratio */
.image-container {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
```

## 📊 Vite Configuration for Performance

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-select'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
});
```

## 🎨 CSS Optimization

### 1. Critical CSS
```html
<!-- Inline critical CSS in index.html -->
<style>
  /* Critical above-the-fold styles */
  body { margin: 0; font-family: Inter, sans-serif; }
  .hero { min-height: 100vh; }
</style>
```

### 2. Remove Unused CSS
```bash
npm install --save-dev purgecss

# Add to build process
npx purgecss --css dist/**/*.css --content dist/**/*.html --output dist/
```

## 🔧 Font Optimization

### 1. Use font-display
```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap; /* Prevents invisible text */
  font-weight: 400;
}
```

### 2. Preload Fonts
```html
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />
```

### 3. Subset Fonts
```bash
# Use only characters you need
npm install glyphhanger
glyphhanger --subset=fonts/inter.woff2 --formats=woff2
```

## 📱 Mobile Optimization

### 1. Responsive Images
```tsx
<picture>
  <source
    media="(max-width: 768px)"
    srcSet="/images/hero-mobile.webp"
  />
  <source
    media="(min-width: 769px)"
    srcSet="/images/hero-desktop.webp"
  />
  <img src="/images/hero-desktop.webp" alt="Hero" />
</picture>
```

### 2. Touch Target Size
```css
/* Ensure buttons are at least 48x48px */
button, a {
  min-height: 48px;
  min-width: 48px;
  padding: 12px 24px;
}
```

## 🔍 Monitoring Tools

### 1. Lighthouse CI
```bash
npm install --save-dev @lhci/cli

# Add to package.json
"scripts": {
  "lighthouse": "lhci autorun"
}
```

### 2. Web Vitals Library
```bash
npm install web-vitals
```

```tsx
// src/utils/reportWebVitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

// In main.tsx
import { reportWebVitals } from './utils/reportWebVitals';

reportWebVitals(console.log);
```

## 📈 Performance Budget

Set performance budgets in `vite.config.ts`:

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    // Warn if chunk exceeds 500kb
    chunkSizeWarningLimit: 500,
  },
});
```

## ✅ Performance Checklist

### Images
- [ ] Convert to WebP format
- [ ] Lazy load below-the-fold images
- [ ] Use responsive images
- [ ] Set width and height attributes
- [ ] Use CDN for image delivery

### JavaScript
- [ ] Code split by route
- [ ] Defer non-critical scripts
- [ ] Remove unused dependencies
- [ ] Minify and compress
- [ ] Use tree shaking

### CSS
- [ ] Inline critical CSS
- [ ] Remove unused CSS
- [ ] Minify CSS
- [ ] Use CSS containment

### Fonts
- [ ] Use font-display: swap
- [ ] Preload critical fonts
- [ ] Subset fonts
- [ ] Use WOFF2 format

### Caching
- [ ] Set proper cache headers
- [ ] Use service worker
- [ ] Implement stale-while-revalidate
- [ ] Cache static assets

### Network
- [ ] Enable HTTP/2 or HTTP/3
- [ ] Use CDN
- [ ] Enable compression (Gzip/Brotli)
- [ ] Minimize redirects

## 🎯 Target Scores

Aim for these Lighthouse scores:

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## 📊 Before/After Metrics

Track these metrics before and after optimization:

| Metric | Before | Target | After |
|--------|--------|--------|-------|
| LCP | ? | <2.5s | ? |
| FID | ? | <100ms | ? |
| CLS | ? | <0.1 | ? |
| Page Size | ? | <1MB | ? |
| Load Time | ? | <2s | ? |

## 🚀 Quick Wins

1. **Enable Compression**: Add Brotli/Gzip
2. **Lazy Load Images**: Already implemented ✅
3. **Code Splitting**: Implement route-based splitting
4. **Preconnect**: Already implemented ✅
5. **Font Optimization**: Add font-display: swap

---

**Monitor your Core Web Vitals regularly and iterate on improvements!**