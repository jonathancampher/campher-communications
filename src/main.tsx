
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
