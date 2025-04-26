
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
optimizeLCP();

// Use requestIdleCallback to initialize non-critical tasks
const scheduleNonCriticalTasks = () => {
  const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 50));
  
  idleCallback(() => {
    // Register service worker for production
    if (import.meta.env.PROD && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration.scope);
        })
        .catch(error => {
          console.error('SW registration failed:', error);
        });
    }
  });
};

// Start rendering immediately with critical CSS
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
  // Schedule non-critical tasks after render
  scheduleNonCriticalTasks();
}

// Optimize font loading on page ready
if ('fonts' in document) {
  document.fonts.ready.then(() => {
    document.documentElement.classList.add('fonts-loaded');
    console.log('Fonts loaded and ready');
  });
}
