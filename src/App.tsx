import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MealProvider } from "@/context/MealContext";
import Index from "./pages/Index";
import ValjMatratt from "./pages/ValjMatratt";
import Veckoschema from "./pages/Veckoschema";
import Matratter from "./pages/Matratter";
import Handlingslista from "./pages/Handlingslista";
import LaggTill from "./pages/LaggTill";
import Information from "./pages/Information";
import OmOss from "./pages/OmOss";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MealProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/valj-matratt" element={<ValjMatratt />} />
            <Route path="/veckomeny" element={<Veckoschema />} />
            <Route path="/matratter" element={<Matratter />} />
            <Route path="/handlingslista" element={<Handlingslista />} />
            <Route path="/lagg-till" element={<LaggTill />} />
            <Route path="/information" element={<Information />} />
            <Route path="/om-oss" element={<OmOss />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </MealProvider>
  </QueryClientProvider>
);

export default App;
