
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './critical.css';
import './index.css';

// Add a listener for when CSS is loaded
const onStylesLoaded = () => {
  // Start the app rendering only after CSS is loaded
  createRoot(document.getElementById("root")!).render(<App />);
};

// Check if all stylesheets are loaded
if (document.styleSheets.length > 0) {
  onStylesLoaded();
} else {
  // If stylesheets aren't loaded yet, set up a listener
  window.addEventListener('load', onStylesLoaded);
}
