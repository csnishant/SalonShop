import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Scissors,
  Sparkles,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Star,
  MapPin,
  Phone,
} from "lucide-react";

const swipeAnimation = {
  x: [-1, 1, -1, 1, 0],
  transition: {
    duration: 0.8,
    repeat: Infinity,
    repeatDelay: 3,
    ease: "easeInOut",
  },
};

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isBannerExpanded, setIsBannerExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Hide/Show logic on scroll
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText("STYLORIA50");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNavigation = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setIsBannerExpanded(false);

    window.history.pushState({}, "", path);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  const menuData = {
    "Hair & Color": [
      {
        title: "Expert Haircuts",
        desc: "Precision & custom styles",
        icon: <Scissors size={18} />,
      },
      {
        title: "Couture Hair Color",
        desc: "Advanced fashion tones",
        icon: <Sparkles size={18} />,
      },
    ],
    "Skin & Bridal": [
      {
        title: "Premium Skin Care",
        desc: "Rejuvenating therapies",
        icon: <Sparkles size={18} />,
      },
      {
        title: "Bridal Services & Makeup",
        desc: "Flawless celebrity transformations",
        icon: <Heart size={18} />,
      },
    ],
  };

  const mobileLinks = [
    { name: "Hair Cuts", icon: <Scissors size={20} /> },
    { name: "Hair Color", icon: <Sparkles size={20} /> },
    { name: "Makeup", icon: <Heart size={20} /> },
    { name: "Skin Care", icon: <Sparkles size={20} /> },
    { name: "Bridal Services", icon: <ShieldCheck size={20} /> },
  ];

  const textShadowStyle =
    isScrolled || mobileMenuOpen
      ? {}
      : {
          textShadow:
            "0px 2px 8px rgba(0, 0, 0, 0.85), 0px 4px 20px rgba(0, 0, 0, 0.4)",
        };

  return (
    <motion.nav
      layout
      animate={{ translateY: isVisible ? "0%" : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-[9999] border-b transition-all duration-500 ease-out ${
        isBannerExpanded
          ? "bg-[#0a0a0a] border-white/5 shadow-2xl text-white"
          : isScrolled || mobileMenuOpen
            ? "bg-white/95 text-black backdrop-blur-xl border-neutral-200 shadow-xl"
            : "bg-transparent text-white border-transparent py-2 md:py-4"
      }`}>
      {/* --- MAIN INTERFACE ZONE --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[64px] flex items-center justify-between">
        <AnimatePresence mode="wait">
          {!isBannerExpanded ? (
            <motion.div
              key="navbar-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex justify-between items-center gap-2">
              {/* BRAND LOGO AREA */}
              <a
                href="/"
                onClick={(e) => handleNavigation(e, "/")}
                className={`flex flex-col group relative z-[10001] shrink-0 ${mobileMenuOpen ? "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto" : "opacity-100"}`}>
                <span
                  className={`text-xl md:text-2xl font-black tracking-tighter transition-colors ${
                    isScrolled
                      ? "text-black group-hover:text-amber-600"
                      : "text-white group-hover:text-amber-400"
                  }`}
                  style={textShadowStyle}>
                  STYLORIA
                </span>
                <span
                  className="text-[7.5px] md:text-[9px] tracking-[0.3em] md:tracking-[0.45em] text-amber-500 font-black uppercase ml-0.5"
                  style={textShadowStyle}>
                  Unisex Salon • Burhanpur
                </span>
              </a>

              {/* DESKTOP NAVIGATION */}
              <div className="hidden lg:flex items-center gap-4">
                <div
                  className={`flex items-center gap-2 p-1.5 rounded-full border transition-all duration-300 ${
                    isScrolled
                      ? "bg-black/5 border-black/5 backdrop-blur-md"
                      : "bg-black/30 border-white/10 backdrop-blur-md shadow-2xl"
                  }`}>
                  {Object.keys(menuData).map((item) => (
                    <div
                      key={item}
                      className="relative"
                      onMouseEnter={() => setActiveMenu(item)}
                      onMouseLeave={() => setActiveMenu(null)}>
                      <button
                        className={`px-4 py-2 rounded-full text-[13px] font-black tracking-wide flex items-center gap-1.5 transition-all ${
                          activeMenu === item
                            ? "bg-amber-500 text-black shadow-lg"
                            : isScrolled
                              ? "text-neutral-800 hover:bg-black/5"
                              : "text-white hover:bg-white/10"
                        }`}
                        style={activeMenu === item ? {} : textShadowStyle}>
                        {item}
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${activeMenu === item ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeMenu === item && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 pt-4 w-80">
                            <div
                              className={`rounded-3xl p-3 shadow-2xl border ${
                                isScrolled
                                  ? "bg-white border-neutral-200"
                                  : "bg-[#0e0e0e]/95 border-white/10 backdrop-blur-xl"
                              }`}>
                              {menuData[item].map((sub) => (
                                <a
                                  key={sub.title}
                                  href="https://maps.app.goo.gl/8XSSKuy7e3T81v7n6"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center p-3 rounded-2xl hover:bg-amber-500/10 group/item transition-all">
                                  <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 group-hover/item:bg-amber-500 group-hover/item:text-black transition-all ${
                                      isScrolled
                                        ? "bg-neutral-100 text-neutral-800"
                                        : "bg-white/5 text-amber-400"
                                    }`}>
                                    {sub.icon}
                                  </div>
                                  <div>
                                    <p
                                      className={`text-sm font-bold group-hover/item:text-amber-600 transition-colors ${
                                        isScrolled
                                          ? "text-neutral-900"
                                          : "text-white"
                                      }`}>
                                      {sub.title}
                                    </p>
                                    <p className="text-[10px] text-neutral-500 mt-0.5">
                                      {sub.desc}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* DESKTOP EXCLUSIVE BANNER LINK */}
                <motion.div
                  onClick={() => setIsBannerExpanded(true)}
                  animate={swipeAnimation}
                  className={`hidden xl:flex items-center gap-2 cursor-pointer border px-3 py-1.5 rounded-full shadow-sm transition-all hover:scale-105 active:scale-95 ${
                    isScrolled
                      ? "bg-amber-500/10 border-amber-500/40"
                      : "bg-amber-500/20 border-amber-500/30 backdrop-blur-md"
                  }`}>
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                  </span>
                  <span
                    className={`text-[9px] font-black uppercase tracking-widest whitespace-nowrap ${isScrolled ? "text-amber-700" : "text-amber-400"}`}>
                    ★ First Visit Offer Inside
                  </span>
                </motion.div>
              </div>

              {/* CONVERSION ZONE */}
              <div
                className={`flex items-center gap-2 md:gap-4 relative z-[10001] shrink-0 ${mobileMenuOpen ? "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto" : "opacity-100"}`}>
                <a
                  href="tel:+919755131359"
                  className={`hidden sm:flex p-2 transition-colors drop-shadow-md ${
                    isScrolled
                      ? "text-neutral-800 hover:text-amber-600"
                      : "text-white hover:text-amber-400"
                  }`}>
                  <ShoppingBag size={20} />
                </a>

                {/* OFFER BADGE + BOOK CTA */}
                <div className="flex items-center gap-2">
                  <motion.div
                    onClick={() => setIsBannerExpanded(!isBannerExpanded)}
                    animate={{
                      scale: [1, 1.04, 1],
                      boxShadow: [
                        "0px 0px 0px rgba(245, 158, 11, 0)",
                        "0px 0px 10px rgba(245, 158, 11, 0.3)",
                        "0px 0px 0px rgba(245, 158, 11, 0)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    className={`px-2 py-2 rounded-xl text-[9px] font-black tracking-wider uppercase whitespace-nowrap cursor-pointer z-10 border flex items-center gap-1.5 bg-transparent ${
                      isScrolled
                        ? "border-amber-500/40 text-amber-600"
                        : "border-amber-400/30 text-amber-400"
                    }`}>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                    </span>
                    <span>🎁 50% OFF</span>
                  </motion.div>

                  <button
                    onClick={(e) => handleNavigation(e, "/book-appointment")}
                    className="bg-amber-500 text-black px-3.5 sm:px-5 py-2 md:py-2.5 rounded-xl text-[10px] md:text-[11px] font-black tracking-widest shadow-lg hover:bg-amber-400 active:scale-95 transition-all border border-amber-400/20">
                    BOOK NOW
                  </button>
                </div>
              </div>

              {/* MOBILE TRIGGER */}
              <button
                className={`lg:hidden transition-colors p-2 z-[10001] relative ${isScrolled || mobileMenuOpen ? "text-black" : "text-white"}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </motion.div>
          ) : (
            /* --- LAYER B: MOBILE OPTIMIZED VOUCHER HERO BANNER --- */
            <motion.div
              key="banner-content"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col md:grid md:grid-cols-12 gap-3 items-center py-4 text-white relative">
              <div className="w-full md:col-span-7 space-y-1 text-center md:text-left pr-8 md:pr-0">
                <div className="flex items-center justify-center md:justify-start gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-white/80 font-black text-[9px] tracking-wider uppercase">
                    Top Rated Unisex Salon in Burhanpur
                  </span>
                </div>
                <h3 className="text-base md:text-xl font-black text-white leading-tight uppercase tracking-tight">
                  Where Style Meets{" "}
                  <span className="text-amber-400">Transformation</span>
                </h3>
              </div>

              <div className="w-full md:col-span-4">
                <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/30 p-2 sm:p-3 rounded-xl flex items-center justify-between gap-3 shadow-md">
                  <div className="text-left">
                    <span className="text-[7.5px] bg-amber-500 text-black px-1.5 py-0.5 rounded-full font-black uppercase tracking-wider inline-block">
                      Welcome Gift
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-white italic tracking-tight mt-0.5">
                      FLAT 50% OFF
                    </h4>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="shrink-0 bg-amber-500 text-black px-3 py-1.5 rounded-lg font-black text-[10px] tracking-widest transition-all active:scale-95 shadow-md hover:bg-amber-400">
                    {copied ? "COPIED" : "STYLORIA50"}
                  </button>
                </div>
              </div>

              <div className="absolute right-0 top-3 md:relative md:top-0 md:col-span-1 flex justify-end">
                <button
                  onClick={() => setIsBannerExpanded(false)}
                  className="w-7 h-7 rounded-full bg-white/5 text-white flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                  <X size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- PREMIUM MOBILE FULL-SCREEN MENU DRAWER --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[999]"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 bg-white text-black z-[1000] flex flex-col w-full max-w-[340px] h-[100dvh] shadow-2xl p-6 pt-24 border-l border-neutral-100">
              {/* Navigation Links */}
              <div className="flex flex-col gap-3.5 overflow-y-auto max-h-[50vh] pr-1">
                <p className="text-[10px] font-black tracking-widest text-neutral-400 uppercase mb-1">
                  Our Specialties
                </p>
                {mobileLinks.map((item) => (
                  <a
                    key={item.name}
                    href="https://maps.app.goo.gl/8XSSKuy7e3T81v7n6"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3.5 p-3 rounded-xl text-neutral-800 hover:bg-amber-500/10 active:bg-amber-500/10 transition-all font-bold text-base group">
                    <span className="text-amber-500 p-2 bg-amber-500/10 rounded-xl group-hover:scale-105 transition-transform">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>

              {/* Bottom Quick Actions Dashboard */}
              <div className="mt-auto border-t border-neutral-100 pt-6 space-y-5 bg-gradient-to-b from-transparent to-neutral-50/50 -mx-6 px-6 pb-4 rounded-b-2xl">
                <div>
                  <span className="inline-flex items-center gap-1 text-amber-600 text-[10px] font-black tracking-widest uppercase mb-1.5">
                    <Phone size={10} /> Booking Helpline
                  </span>
                  <a
                    href="tel:+919755131359"
                    className="text-xl text-neutral-900 font-black tracking-tight hover:text-amber-600 transition-colors block">
                    +91 9755131359
                  </a>
                </div>

                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1 text-neutral-400 text-[10px] font-black tracking-widest uppercase">
                    <MapPin size={10} /> Flagship Salon
                  </span>
                  <p className="text-[11px] text-neutral-600 leading-relaxed font-medium">
                    Indra Colony, Opp. Anand Green Restaurant, <br />
                    <span className="font-bold text-neutral-800">
                      Burhanpur (M.P.)
                    </span>
                  </p>
                </div>

                <button
                  onClick={(e) => handleNavigation(e, "/book-appointment")}
                  className="w-full bg-black text-white text-center py-3 rounded-xl font-black text-xs tracking-widest shadow-xl active:scale-95 transition-transform bg-neutral-900 hover:bg-black">
                  SCHEDULE APPOINTMENT
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
