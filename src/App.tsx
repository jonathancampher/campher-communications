
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from './components/ui/toaster';

// Lazy loaded components for performance
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Personvern = lazy(() => import('./pages/Personvern'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Vilkar = lazy(() => import('./pages/Vilkar'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Custom Cookie Consent
import CookieConsent from './components/cookie-consent/CookieConsent';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loading-fallback">Laster...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/personvern" element={<Personvern />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/vilkar" element={<Vilkar />} />
          <Route path="/prosjekter/:projectId" element={<ProjectPage />} />
          <Route path="/blogg/:postId" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <CookieConsent />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
