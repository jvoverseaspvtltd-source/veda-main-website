import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layouts/Layout";

// Scroll to top helper component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

import Home from "./pages/Home";

// Lazy load other pages for performance
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const LoanProducts = React.lazy(() => import("./pages/LoanProducts"));
const OurServices = React.lazy(() => import("./pages/OurServices"));
const HowItWorks = React.lazy(() => import("./pages/HowItWorks"));
const WhyChooseUs = React.lazy(() => import("./pages/WhyChooseUs"));
const BecomeDSA = React.lazy(() => import("./pages/BecomeDSA"));
const Contact = React.lazy(() => import("./pages/Contact"));
const LoanApplication = React.lazy(() => import("./pages/LoanApplication"));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-surface">
    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin shadow-xl shadow-accent/20"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<LoanProducts />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/become-dsa" element={<BecomeDSA />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<LoanApplication />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
