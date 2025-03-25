
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
  { rel: 'preload', href: '/lovable-uploads/c5502322-5b49-4268-b427-a3e72c87d19b.png', as: 'image' },
  { rel: 'preload', href: '/lovable-uploads/prosjekt1.webp', as: 'image' }
];

preloadLinks.forEach(link => {
  const linkEl = document.createElement('link');
  linkEl.rel = link.rel;
  linkEl.href = link.href;
  linkEl.as = link.as;
  document.head.appendChild(linkEl);
});
