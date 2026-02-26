import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import About from "./pages/About";
import Faq from "./pages/Faq";
import FreeTrainings from "./pages/FreeTrainings";
import ForIndividuals from "./pages/ForIndividuals";
import ForCorporates from "./pages/ForCorporates";
import ForCampus from "./pages/ForCampus";
import KnowledgeHub from "./pages/KnowledgeHub";
import NotFound from "./pages/NotFound";
import ThemeColorPicker from "./components/ui/ThemeColorPicker";

// Scrolls the window back to the top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ThemeColorPicker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/free-trainings" element={<FreeTrainings />} />
          <Route path="/for-individuals" element={<ForIndividuals />} />
          <Route path="/for-corporates" element={<ForCorporates />} />
          <Route path="/for-campus" element={<ForCampus />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
