
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Personvern from "./pages/Personvern";
import Vilkar from "./pages/Vilkar";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";
import ProjectPage from "./pages/ProjectPage";
import { setupLazyLoading, ensureImageDimensions } from "./utils/imageLoader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (replacing cacheTime)
      refetchOnWindowFocus: false,
      retry: 1
    },
  },
});

const App = () => {
  useEffect(() => {
    // Run optimization utilities after initial render
    setupLazyLoading();
    ensureImageDimensions();
    
    // Re-run when window is resized
    window.addEventListener('resize', ensureImageDimensions);
    
    return () => {
      window.removeEventListener('resize', ensureImageDimensions);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/personvern" element={<Personvern />} />
            <Route path="/vilkar" element={<Vilkar />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
