
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './critical.css';
import './index.css';

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
}

// Initialize page optimizations
initializePage();

// Immediately start rendering with critical CSS
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}

// Preload important assets
const preloadLinks = [
  { rel: 'preload', href: '/lovable-uploads/25644d97-9c73-464b-a2b0-fe20bd636d08.png', as: 'image' },
  { rel: 'preload', href: '/lovable-uploads/c5502322-5b49-4268-b427-a3e72c87d19b.png', as: 'image' },
  { rel: 'preload', href: '/lovable-uploads/prosjekt1.webp', as: 'image' },
  // Add preconnect for Netlify forms - important for form submissions
  { rel: 'preconnect', href: 'https://api.netlify.com' },
  // Add preconnect for Google Fonts
  { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: '' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
];

preloadLinks.forEach(link => {
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
  // Optimize font loading with font loading API
  Promise.all([
    document.fonts.load('1em Inter'),
    document.fonts.load('500 1em Inter'),
    document.fonts.load('600 1em Inter')
  ]).then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });
}
