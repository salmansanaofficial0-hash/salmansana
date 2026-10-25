import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import SiteMotion from "./components/SiteMotion";
import ScrollManager from "./components/ScrollManager.tsx";
import { SiteContentProvider } from "./lib/site-content";

const queryClient = new QueryClient();
const AboutPage = lazy(() => import("./pages/AboutPage.tsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const Credentials = lazy(() => import("./pages/Credentials.tsx"));
const Admin = lazy(() => import("./pages/Admin.tsx"));

const App = () => (
  <SiteContentProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <SiteMotion />
        <Suspense fallback={<div className="grid min-h-screen place-items-center bg-background text-sm font-bold text-muted">Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<div className="ref-secondary"><AboutPage /></div>} />
          <Route path="/portfolio" element={<div className="ref-secondary"><Portfolio /></div>} />
          <Route path="/blog" element={<div className="ref-secondary"><Blog /></div>} />
          <Route path="/blog/:slug" element={<div className="ref-secondary"><BlogPost /></div>} />
          <Route path="/credentials" element={<div className="ref-secondary"><Credentials /></div>} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </SiteContentProvider>
);

export default App;
