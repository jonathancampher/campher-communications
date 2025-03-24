
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Personvern from "./pages/Personvern";
import Vilkar from "./pages/Vilkar";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

/**
 * App-komponent
 * 
 * Hovedkomponent som setter opp rutere, providers og den overordnede
 * applikasjonsstrukturen. Håndterer også ruting til ulike sider.
 */
const queryClient = new QueryClient();

const App = () => (
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
