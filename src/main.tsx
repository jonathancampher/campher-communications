
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
const rootElement = document.getElementById("root");
if (rootElement) {
  // Create root once and render immediately
  createRoot(rootElement).render(<App />);
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

// Improved font loading strategy with proper TypeScript typing
const loadFonts = () => {
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
  fontLink.setAttribute('media', 'print');
  fontLink.setAttribute('onload', "this.media='all'");
  document.head.appendChild(fontLink);
};

// Load fonts immediately
loadFonts();

// Prefetch important images
const prefetchCriticalAssets = () => {
  const criticalImages = [
    '/lovable-uploads/c5502322-5b49-4268-b427-a3e72c87d19b.png', // Logo
    '/lovable-uploads/prosjekt1.webp' // First project image
  ];
  
  criticalImages.forEach(imageSrc => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imageSrc;
    document.head.appendChild(link);
  });
};

// Prefetch critical assets
prefetchCriticalAssets();

// Load fonts when ready - prioritize critical weights first
if ('fonts' in document) {
  // Load critical weights first
  Promise.all([
    document.fonts.load('500 1em Inter'),
    document.fonts.load('600 1em Inter')
  ]).then(() => {
    // Mark when primary fonts are ready
    document.documentElement.classList.add('primary-fonts-loaded');
    
    // Then load the rest
    Promise.all([
      document.fonts.load('1em Inter'),
      document.fonts.load('300 1em Inter'),
      document.fonts.load('700 1em Inter')
    ]).then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  });
}
