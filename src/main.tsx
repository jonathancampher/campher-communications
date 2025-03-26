
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
  { rel: 'preload', href: '/lovable-uploads/25644d97-9c73-464b-a2b0-fe20bd636d08.png', as: 'image' },
  { rel: 'preload', href: '/lovable-uploads/c5502322-5b49-4268-b427-a3e72c87d19b.png', as: 'image' },
  { rel: 'preload', href: '/lovable-uploads/prosjekt1.webp', as: 'image' },
  // Add preconnect for Netlify forms
  { rel: 'preconnect', href: 'https://api.netlify.com' }
];

preloadLinks.forEach(link => {
  const linkEl = document.createElement('link');
  linkEl.rel = link.rel;
  linkEl.href = link.href;
  if (link.as) {
    linkEl.as = link.as;
  }
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
