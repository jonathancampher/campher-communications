
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './critical.css';
import './index.css';
import { initImageOptimizations } from './utils/imageLoader';

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
  initImageOptimizations();

  // Initialize Google Tag Manager dataLayer if not present
  window.dataLayer = window.dataLayer || [];
  
  // Initialize consent settings with declined state by default
  window.dataLayer.push({
    'gtag_consent': 'denied',
    'marketing_consent': 'denied',
    'preference_consent': 'denied'
  });
}

// Initialize page optimizations
initializePage();

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

// Optimize font loading with priority loading
const fontLinks = [
  { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap', rel: 'stylesheet' }
];

// Preload critical fonts
fontLinks.forEach(font => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = font.href;
  link.onload = function() {
    this.onload = null;
    this.rel = 'stylesheet';
  };
  document.head.appendChild(link);
});

// Load fonts when ready
if ('fonts' in document) {
  Promise.all([
    document.fonts.load('1em Inter'),
    document.fonts.load('500 1em Inter'),
    document.fonts.load('600 1em Inter')
  ]).then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });
}
