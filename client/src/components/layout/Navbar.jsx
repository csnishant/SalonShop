import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Scissors,
  Sparkles,
  Heart,
  ShieldCheck,
  Gift,
} from "lucide-react";
import MobileMenu from "./MobileMenu";
import OfferBanner from "./OfferBanner";

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
        if (!mobileMenuOpen) setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleCopy = (e) => {
    if (e) e.stopPropagation();
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
    <>
      <motion.nav
        layout
        animate={{ translateY: isVisible ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        /* FIX: यहाँ z-index को डायनामिक किया है, जब मोबाइल मेनू खुलेगा तो पैरेंट सीधे z-[2500] बन जाएगा */
        className={`fixed top-0 left-0 right-0 w-full border-b transition-all duration-500 ease-out ${
          mobileMenuOpen ? "z-[2500]" : "z-[999]"
        } ${
          isBannerExpanded
            ? "bg-[#0a0a0a] border-white/5 text-white"
            : mobileMenuOpen
              ? "bg-white text-black border-transparent"
              : isScrolled
                ? "bg-white/95 text-black backdrop-blur-xl border-neutral-200 shadow-xl"
                : "bg-transparent text-white border-transparent py-2 md:py-4"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[72px] flex items-center justify-between">
          <AnimatePresence mode="wait">
            {!isBannerExpanded ? (
              <motion.div
                key="navbar-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex justify-between items-center gap-2">
                {/* BRAND LOGO */}
                <a
                  href="/"
                  onClick={(e) => handleNavigation(e, "/")}
                  className="flex flex-col group relative">
                  <span
                    className={`text-xl md:text-2xl font-black tracking-tighter ${isScrolled || mobileMenuOpen ? "text-black" : "text-white"}`}
                    style={textShadowStyle}>
                    STYLORIA
                  </span>
                  <span
                    className="text-[7.5px] md:text-[9px] tracking-[0.3em] md:tracking-[0.45em] text-amber-500 font-black uppercase ml-0.5"
                    style={textShadowStyle}>
                    Unisex Salon • Burhanpur
                  </span>
                </a>

                {/* DESKTOP NAV */}
                <div className="hidden lg:flex items-center gap-6">
                  <div
                    className={`flex items-center gap-2 p-1.5 rounded-full border ${isScrolled ? "bg-black/5 border-black/5" : "bg-black/30 border-white/10 backdrop-blur-md"}`}>
                    {Object.keys(menuData).map((item) => (
                      <div
                        key={item}
                        className="relative"
                        onMouseEnter={() => setActiveMenu(item)}
                        onMouseLeave={() => setActiveMenu(null)}>
                        <button
                          className={`px-4 py-2 rounded-full text-[13px] font-black tracking-wide flex items-center gap-1.5 transition-all ${activeMenu === item ? "bg-amber-500 text-black" : isScrolled ? "text-neutral-800" : "text-white"}`}>
                          {item} <ChevronDown size={13} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setIsBannerExpanded(true)}
                    className="flex items-center gap-1.5 bg-amber-500/10 text-amber-500 border border-amber-500/30 px-3 py-1.5 rounded-full text-xs font-black tracking-wider animate-pulse hover:bg-amber-500 hover:text-black transition-all">
                    <Gift size={14} /> SPECIAL OFFER
                  </button>
                </div>

                {/* CONVERSION, MOBILE OFFER & HAMBURGER */}
                <div className="flex items-center gap-2 relative">
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
                    <span>🎁</span>
                  </motion.div>

                  <button
                    onClick={(e) => handleNavigation(e, "/book-appointment")}
                    className="bg-amber-500 text-black px-3.5 py-2 rounded-xl text-[10px] font-black tracking-widest shadow-lg">
                    BOOK NOW
                  </button>

                  {/* PREMIUM GRAY BUTTON - अब यह हमेशा ऊपर चमकेगा */}
                  <button
                    className={`lg:hidden p-2.5 rounded-full transition-all duration-300 ${
                      mobileMenuOpen || isScrolled
                        ? "bg-neutral-100 text-neutral-950 hover:bg-neutral-200 active:scale-95"
                        : "bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm active:scale-95"
                    }`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu">
                    {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                  </button>
                </div>
              </motion.div>
            ) : (
              <OfferBanner
                copied={copied}
                onCopy={handleCopy}
                onClose={() => setIsBannerExpanded(false)}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* MOBILE MENU DRAWER */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
        links={mobileLinks}
        onNavigate={handleNavigation}
      />
    </>
  );
};

export default Navbar;
