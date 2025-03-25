
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './critical.css';
import './index.css';

// Immediately start rendering with critical CSS
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}

// Preload important assets
const preloadLinks = [
  { rel: 'preload', href: '/lovable-uploads/af10b6f4-b4ab-4d4c-b1fa-a5c439dbb691.png', as: 'image' },
  { rel: 'preload', href: '/lovable-uploads/prosjekt1.webp', as: 'image' }
];

preloadLinks.forEach(link => {
  const linkEl = document.createElement('link');
  linkEl.rel = link.rel;
  linkEl.href = link.href;
  linkEl.as = link.as;
  document.head.appendChild(linkEl);
});

// Register service worker for production
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(error => {
      console.error('SW registration failed:', error);
    });
  });
}
