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
  Star,
  ShieldCheck,
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
    { name: "Hair Cuts", icon: <Scissors size={24} /> },
    { name: "Hair Color", icon: <Sparkles size={24} /> },
    { name: "Makeup", icon: <Heart size={24} /> },
    { name: "Skin Care", icon: <Sparkles size={24} /> },
    { name: "Bridal Services", icon: <ShieldCheck size={24} /> },
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
            ? "bg-white/95 text-black backdrop-blur-xl py-1.5 border-neutral-200 shadow-xl"
            : "bg-transparent text-white border-transparent py-3"
      }`}>
      {/* --- MAIN INTERFACE ZONE --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative min-h-[60px] flex items-center justify-between">
        <AnimatePresence mode="wait">
          {!isBannerExpanded ? (
            <motion.div
              key="navbar-content"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-between items-center gap-2">
              {/* BRAND LOGO AREA */}
              <a
                href="/"
                onClick={(e) => handleNavigation(e, "/")}
                className="flex flex-col group relative z-[1001] shrink-0">
                <span
                  className={`text-lg md:text-2xl font-black tracking-tighter transition-colors ${isScrolled || mobileMenuOpen ? "text-black group-hover:text-amber-600" : "text-white group-hover:text-amber-400"}`}
                  style={textShadowStyle}>
                  STYLORIA
                </span>
                <span
                  className="text-[8px] md:text-[9px] tracking-[0.35em] md:tracking-[0.45em] text-amber-500 font-black uppercase ml-0.5"
                  style={textShadowStyle}>
                  Unisex Salon • Burhanpur
                </span>
              </a>

              {/* DESKTOP NAVIGATION */}
              <div className="hidden lg:flex items-center gap-4">
                <div
                  className={`flex items-center gap-2 p-1.5 rounded-full border transition-all duration-300 ${isScrolled ? "bg-black/5 border-black/5 backdrop-blur-md" : "bg-black/30 border-white/10 backdrop-blur-md shadow-2xl"}`}>
                  {Object.keys(menuData).map((item) => (
                    <div
                      key={item}
                      className="relative"
                      onMouseEnter={() => setActiveMenu(item)}
                      onMouseLeave={() => setActiveMenu(null)}>
                      <button
                        className={`px-4 py-2 rounded-full text-[13px] font-black tracking-wide flex items-center gap-1.5 transition-all ${activeMenu === item ? "bg-amber-500 text-black shadow-lg" : isScrolled ? "text-neutral-800 hover:bg-black/5" : "text-white hover:bg-white/10"}`}
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
                              className={`rounded-3xl p-3 shadow-2xl border ${isScrolled ? "bg-white border-neutral-200" : "bg-[#0e0e0e]/95 border-white/10 backdrop-blur-xl"}`}>
                              {menuData[item].map((sub) => (
                                <a
                                  key={sub.title}
                                  href="https://maps.app.goo.gl/8XSSKuy7e3T81v7n6"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center p-3 rounded-2xl hover:bg-amber-500/10 group/item transition-all">
                                  <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 group-hover/item:bg-amber-500 group-hover/item:text-black transition-all ${isScrolled ? "bg-neutral-100 text-neutral-800" : "bg-white/5 text-amber-400"}`}>
                                    {sub.icon}
                                  </div>
                                  <div>
                                    <p
                                      className={`text-sm font-bold group-hover/item:text-amber-600 transition-colors ${isScrolled ? "text-neutral-900" : "text-white"}`}>
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

                {/* DESKTOP INTEGRATED EXCLUSIVE BANNER */}
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

              {/* CONVERSION ZONE: PULSING MICRO BADGE LEFT SIDE OF BOOK NOW */}
              <div className="flex items-center gap-1.5 md:gap-4 relative z-[1001] shrink-0">
                <a
                  href="tel:+919755131359"
                  className={`hidden md:flex transition-colors drop-shadow-md ${isScrolled || mobileMenuOpen ? "text-neutral-800 hover:text-amber-600" : "text-white hover:text-amber-400"}`}>
                  <ShoppingBag size={20} />
                </a>

                {/* DYNAMIC COMBINED CONTAINER */}
                <div className="flex items-center gap-1.5 relative">
                  {/* --- INTENSE PULSING MICRO OFFER BADGE (LEFT SIDE) --- */}
                  <motion.div
                    onClick={() => setIsBannerExpanded(!isBannerExpanded)}
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0px 0px 4px rgba(245, 158, 11, 0.0)",
                        "0px 0px 12px rgba(245, 158, 11, 0.4)",
                        "0px 0px 4px rgba(245, 158, 11, 0.0)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.4,
                      ease: "easeInOut",
                    }}
                    className={`px-2.5 py-2 rounded-xl text-[9px] font-black tracking-widest uppercase whitespace-nowrap cursor-pointer z-10 border flex items-center gap-1.5 transition-colors bg-transparent ${
                      isScrolled || mobileMenuOpen
                        ? "border-amber-500/40 text-amber-600"
                        : "border-amber-400/30 text-amber-400"
                    }`}>
                    {/* --- HIGH CONVERSION PULSING LIGHT DOT --- */}
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                    </span>

                    {/* --- GIFT ICON & TEXT --- */}
                    <span>🎁 50% OFF</span>
                  </motion.div>

                  {/* MAIN CALL TO ACTION ACTION */}
                  <button
                    onClick={(e) => handleNavigation(e, "/book-appointment")}
                    className="bg-amber-500 text-black px-3.5 sm:px-6 py-2 md:py-3 rounded-xl text-[10px] md:text-[11px] font-black tracking-widest shadow-xl hover:bg-amber-400 active:scale-95 transition-all block text-center border border-amber-400/20 whitespace-nowrap">
                    BOOK NOW
                  </button>
                </div>

                <button
                  className={`lg:hidden transition-colors p-1 ${isScrolled || mobileMenuOpen ? "text-black" : "text-white"}`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
              </div>
            </motion.div>
          ) : (
            /* LAYER B: PREMIUM OVERLAY VOUCHER CARD */
            <motion.div
              key="banner-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-center py-4 text-white bg-[#0a0a0a]">
              <div className="lg:col-span-7 space-y-1">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-white/90 font-bold text-[10px] tracking-wide uppercase">
                    Top Rated Unisex Salon in Burhanpur
                  </span>
                </div>
                <h3 className="text-lg md:text-2xl font-black text-white leading-tight uppercase tracking-tight">
                  Where Style Meets{" "}
                  <span className="text-amber-400">Transformation</span>
                </h3>
              </div>

              <div className="lg:col-span-4 relative">
                <div className="relative bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/30 p-3 rounded-xl flex items-center justify-between gap-3 shadow-xl">
                  <div className="text-left">
                    <div className="text-[8px] bg-amber-500 text-black px-2 py-0.5 rounded-full font-black uppercase tracking-wider inline-block mb-0.5">
                      Welcome Gift
                    </div>
                    <h4 className="text-xl font-black text-white italic">
                      FLAT 50% OFF
                    </h4>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="shrink-0 bg-amber-500 text-black px-3 py-2 rounded-lg font-black text-[10px] tracking-wider transition-transform active:scale-95">
                    {copied ? "COPIED" : "STYLORIA50"}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-1 flex justify-end absolute right-2 top-2 lg:relative lg:right-0 lg:top-0">
                <button
                  onClick={() => setIsBannerExpanded(false)}
                  className="w-8 h-8 rounded-full bg-white/5 text-white flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- LIGHT MODE MOBILE NAVIGATION DRAWER --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-white/95 text-black z-[1000] flex flex-col p-8 pt-28 h-screen w-screen overflow-y-auto backdrop-blur-2xl">
            <div className="flex flex-col gap-5">
              {mobileLinks.map((item) => (
                <a
                  key={item.name}
                  href="https://maps.app.goo.gl/8XSSKuy7e3T81v7n6"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-2xl sm:text-3xl font-black text-neutral-800 hover:text-amber-500 transition-colors group">
                  <span className="text-amber-500 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span>{item.name}.</span>
                </a>
              ))}
            </div>

            <div className="mt-auto border-t border-neutral-200 pt-6">
              <p className="text-amber-600 text-xs font-black mb-1 tracking-widest">
                STYLORIA APPOINTMENTS
              </p>
              <a
                href="tel:+919755131359"
                className="text-xl text-neutral-900 font-black tracking-wide hover:text-amber-500 transition-colors block">
                +91 9755131359
              </a>
              <p className="text-[10px] text-neutral-500 mt-2 uppercase tracking-wider font-medium">
                Indra Colony, Opp. Anand Green Restaurant, Burhanpur
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
