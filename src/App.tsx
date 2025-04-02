
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { optimizeImages } from "./utils/imageLoader";
import { NetlifyFormDetection } from "./components/contact/NetlifyFormDetection";
import Logo from "./components/Logo";

// Lazy-loaded components for better code splitting
const Index = lazy(() => import("./pages/Index"));
const Personvern = lazy(() => import("./pages/Personvern"));
const Vilkar = lazy(() => import("./pages/Vilkar"));
const Cookies = lazy(() => import("./pages/Cookies"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));

// Fallback loading component with logo
const LoadingFallback = () => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-6">
    <Logo />
    <div className="animate-pulse text-campher-blue text-lg font-medium">Laster innhold...</div>
  </div>
);

// Optimized query client with better defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (replacing cacheTime)
      refetchOnWindowFocus: false,
      retry: 1,
      networkMode: 'always', // Better for PWA support
    },
  },
});

const App = () => {
  useEffect(() => {
    // Run optimization utilities after initial render
    optimizeImages();
    
    // Add event listener for resource timing monitoring
    if (window.performance && window.performance.getEntriesByType) {
      window.addEventListener('load', () => {
        // Check Largest Contentful Paint
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          if (entries.length > 0) {
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime / 1000, 'seconds');
          }
        }).observe({ type: 'largest-contentful-paint', buffered: true });

        // Check Cumulative Layout Shift
        new PerformanceObserver((entryList) => {
          let cumulativeScore = 0;
          for (const entry of entryList.getEntries()) {
            // @ts-ignore: LayoutShiftAttribution is not in the TypeScript types yet
            if (!entry.hadRecentInput) {
              // @ts-ignore: value is available but not typed
              cumulativeScore += entry.value;
            }
          }
          console.log('Total CLS:', cumulativeScore);
        }).observe({ type: 'layout-shift', buffered: true });
      });
    }
    
    // Re-run when window is resized
    const handleResize = () => {
      optimizeImages();
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* NetlifyFormDetection must be at the top level for form detection */}
        <NetlifyFormDetection />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/personvern" element={<Personvern />} />
              <Route path="/vilkar" element={<Vilkar />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/project/:id" element={<ProjectPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
