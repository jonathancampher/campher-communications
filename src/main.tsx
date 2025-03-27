
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
  
  // Add passive event listener support detection
  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassive = true;
        return true;
      }
    });
    window.addEventListener('testPassive', null as any, opts);
    window.removeEventListener('testPassive', null as any, opts);
  } catch (e) {}
  
  if (supportsPassive) {
    document.documentElement.classList.add('has-passive-events');
  }

  // Initialize image optimizations right away
  optimizeImages();
}

// Initialize page optimizations
initializePage();

// Immediately start rendering with critical CSS
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}

// Only preload essential resources
const preloadLinks = [
  { rel: 'preload', href: '/lovable-uploads/25644d97-9c73-464b-a2b0-fe20bd636d08.png', as: 'image' },
  // Add preconnect for Netlify forms - important for form submissions
  { rel: 'preconnect', href: 'https://api.netlify.com' },
  // Add preconnect for Google Fonts
  { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: '' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
];

// Only add preload links that don't already exist
const addedLinks = new Set();
preloadLinks.forEach(link => {
  const existingLink = document.querySelector(`link[rel="${link.rel}"][href="${link.href}"]`);
  if (!existingLink && !addedLinks.has(link.href)) {
    const linkEl = document.createElement('link');
    linkEl.rel = link.rel;
    linkEl.href = link.href;
    if (link.as) {
      linkEl.as = link.as;
    }
    if (link.crossOrigin) {
      linkEl.crossOrigin = link.crossOrigin;
    }
    document.head.appendChild(linkEl);
    addedLinks.add(link.href);
  }
});

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

// Handle browser back/forward cache for better performance
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    // Page was restored from the bfcache
    window.location.reload();
  }
});

// Optimize font loading
if ('fonts' in document) {
  // Directly use the font without data: URIs
  Promise.all([
    document.fonts.load('1em Inter'),
    document.fonts.load('500 1em Inter'),
    document.fonts.load('600 1em Inter')
  ]).then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });
}
