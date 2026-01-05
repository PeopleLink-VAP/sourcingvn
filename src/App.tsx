import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductSourcing from "./pages/ProductSourcing";
import TalentSourcing from "./pages/TalentSourcing";
import DigitalSystems from "./pages/DigitalSystems";
import HowWeHelp from "./pages/HowWeHelp";
import OurPeople from "./pages/OurPeople";
import StartProject from "./pages/StartProject";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product-sourcing" element={<ProductSourcing />} />
          <Route path="/talent-sourcing" element={<TalentSourcing />} />
          <Route path="/digital-systems" element={<DigitalSystems />} />
          <Route path="/how-we-help" element={<HowWeHelp />} />
          <Route path="/our-people" element={<OurPeople />} />
          <Route path="/start-project" element={<StartProject />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
