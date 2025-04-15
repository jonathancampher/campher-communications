
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './critical.css';
import './index.css';
import { optimizeImages } from './utils/imageLoader';

// Perform critical initialization before rendering
const initializePage = () => {
  // Check for browser support of critical features
  const supportsIntersectionObserver = 'IntersectionObserver' in window;
  const supportsFetch = 'fetch' in window;
  
  // Add feature detection classes to html element
  if (supportsIntersectionObserver) {
    document.documentElement.classList.add('has-intersection-observer');
  }
  
  if (supportsFetch) {
    document.documentElement.classList.add('has-fetch');
  }
  
  // Initialize image optimizations right away
  optimizeImages();
}

// Optimize resource hints for faster page loads
const addResourceHints = () => {
  // Add preload for critical resources
  const preloadLinks = [
    { href: '/src/critical.css', as: 'style' },
    { href: '/lovable-uploads/c5502322-5b49-4268-b427-a3e72c87d19b.png', as: 'image' }
  ];
  
  preloadLinks.forEach(({ href, as }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  });
}

// Optimize LCP (Largest Contentful Paint)
const optimizeLCP = () => {
  // Create new PerformanceObserver to monitor LCP
  if ('PerformanceObserver' in window) {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime / 1000, 'seconds');
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });

    // Monitor CLS (Cumulative Layout Shift)
    new PerformanceObserver((entryList) => {
      let cumulativeScore = 0;
      for (const entry of entryList.getEntries()) {
        // @ts-ignore: LayoutShiftAttribution is not in the TypeScript types yet
        if (!entry.hadRecentInput) {
          // @ts-ignore: value is available but not typed
          cumulativeScore += entry.value;
        }
      }
      console.log('Total CLS:', cumulativeScore);
    }).observe({ type: 'layout-shift', buffered: true });
  }
}

// Initialize page optimizations
initializePage();
addResourceHints();
optimizeLCP();

// Immediately start rendering with critical CSS
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}

// Register service worker for production
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration.scope);
      })
      .catch(error => {
        console.error('SW registration failed:', error);
      });
  });
}

// Optimize font loading
if ('fonts' in document) {
  Promise.all([
    document.fonts.load('1em Inter'),
    document.fonts.load('500 1em Inter'),
    document.fonts.load('600 1em Inter')
  ]).then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });
}
