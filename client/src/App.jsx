import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import OurStylists from "./pages/OurStylists";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import TrustBanner from "./components/layout/TrustBanner";

function App() {
  // ⚡ Crucial: Lifted mobile state up so Navbar and body locking stay synced
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scrolling when the mobile menu is active
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  return (
    <Router>
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between">
        {/* 👑 MASTER HEADER WRAPPER */}
        {/* z-[9999] guarantees the header section sits securely over video frames & grid items */}
        <div className="fixed top-0 left-0 w-full z-[9999] flex flex-col select-none">
          {/* 1. TRUST BANNER (Forced on top layer) */}
          <div className="relative z-[10002]">
            <TrustBanner />
          </div>

          {/* 2. NAVBAR (Layered neatly below the trust banner) */}
          <div className="relative z-[10001] -mt-[1px]">
            <Navbar
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          </div>
        </div>

        {/* PAGE ROUTER CONTENT SYSTEM */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/stylists" element={<OurStylists />} />
          </Routes>
        </div>

        {/* FOOTER SYSTEM */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
