import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Scissors,
  Sparkles,
  ShoppingBag,
  Heart,
  Check,
  Star,
  ShieldCheck,
  Users,
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
  const [activeMenu, setActiveMenu] = useState(null);
  const [isBannerExpanded, setIsBannerExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText("STYLORIA50");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

  const navLinks = [{ name: "About Salon", path: "/about" }];

  return (
    <motion.nav
      layout
      className={`fixed top-0 w-full z-[9999] border-b border-white/5 shadow-2xl transition-all duration-500 ${
        mobileMenuOpen || isBannerExpanded
          ? "bg-[#0a0a0a]"
          : isScrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md py-3"
            : "bg-transparent py-5"
      }`}>
      {/* --- TOP BAR / TRUST TICKER ZONE --- */}
      <div
        onClick={() =>
          !mobileMenuOpen && setIsBannerExpanded(!isBannerExpanded)
        }
        className={`w-full border-b border-white/5 transition-colors cursor-pointer ${
          isBannerExpanded ? "bg-amber-500/5" : "bg-black/20"
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-[#0a0a0a] object-cover"
                  src={`https://images.unsplash.com/photo-${
                    i === 1
                      ? "1562322140-8baeececf3df"
                      : i === 2
                        ? "1605497746444-ac9da58d440d"
                        : "1596178065887-1198b6148b2b"
                  }?auto=format&fit=crop&w=100&q=80`}
                  alt="Client"
                />
              ))}
            </div>
            <motion.div
              animate={swipeAnimation}
              className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
              </span>
              <span className="text-[9px] font-black text-amber-400 uppercase tracking-widest whitespace-nowrap">
                Get First Visit Exclusive Offer
              </span>
            </motion.div>
          </div>

          {/* Action indicator that swaps dynamically */}
          <div className="flex items-center gap-2 text-amber-400/80 hover:text-amber-400 transition-colors">
            <span className="text-[10px] font-black uppercase tracking-widest hidden md:inline">
              {isBannerExpanded ? "Back to Menu" : "View Exclusive Offer"}
            </span>
            <motion.div animate={{ rotate: isBannerExpanded ? 180 : 0 }}>
              <ChevronDown size={14} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- MAIN INTERFACE ZONE (NAVBAR OR BANNER DETAILS) --- */}
      <div className="max-w-7xl mx-auto px-6 relative min-h-[70px] flex items-center justify-between overflow-hidden">
        <AnimatePresence mode="wait">
          {!isBannerExpanded ? (
            /* LAYER A: STANDALONE NAVBAR INTERFACE */
            <motion.div
              key="navbar-content"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-between items-center">
              {/* Brand Logo Identity */}
              <a href="/" className="flex flex-col group relative z-[1001]">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-white group-hover:text-amber-400 transition-colors">
                  STYLORIA
                </span>
                <span className="text-[9px] tracking-[0.45em] text-amber-500 font-bold uppercase ml-0.5">
                  Unisex Salon • Burhanpur
                </span>
              </a>

              {/* Desktop Interface Navigation */}
              <div className="hidden lg:flex items-center gap-3 bg-white/5 p-1.5 rounded-full border border-white/10">
                {Object.keys(menuData).map((item) => (
                  <div
                    key={item}
                    className="relative"
                    onMouseEnter={() => setActiveMenu(item)}
                    onMouseLeave={() => setActiveMenu(null)}>
                    <button
                      className={`px-5 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2 transition-all ${
                        activeMenu === item
                          ? "bg-amber-500 text-black"
                          : "text-amber-50/80 hover:text-white"
                      }`}>
                      {item}
                      <ChevronDown
                        size={14}
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
                          <div className="bg-[#121212] rounded-3xl p-3 shadow-2xl border border-white/10">
                            {menuData[item].map((sub) => (
                              <a
                                key={sub.title}
                                href="https://maps.app.goo.gl/8XSSKuy7e3T81v7n6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-3 rounded-2xl hover:bg-amber-500/10 group/item transition-all">
                                <div className="w-10 h-10 rounded-xl bg-white/5 text-amber-400 flex items-center justify-center mr-3 group-hover/item:bg-amber-500 group-hover/item:text-black transition-all">
                                  {sub.icon}
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-white group-hover/item:text-amber-400 transition-colors">
                                    {sub.title}
                                  </p>
                                  <p className="text-[10px] text-neutral-400">
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
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    className="px-5 py-2.5 rounded-full text-[13px] font-bold text-amber-50/80 hover:text-white transition-all">
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Action Interactivity Group */}
              <div className="flex items-center gap-4 relative z-[1001]">
                <a
                  href="tel:+919755131359"
                  className="hidden md:flex text-white font-bold text-xs tracking-widest hover:text-amber-400 transition-colors">
                  <ShoppingBag size={20} />
                </a>
                <a
                  href="https://maps.app.goo.gl/8XSSKuy7e3T81v7n6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 text-black px-7 py-3 rounded-full text-[11px] font-black tracking-widest shadow-lg hover:bg-amber-400 active:scale-95 transition-all block text-center">
                  BOOK NOW
                </a>
                <button
                  className="lg:hidden text-white hover:text-amber-400 transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
              </div>
            </motion.div>
          ) : (
            /* LAYER B: PREMIUM EXPANDED VOUCHER INTERFACE */
            <motion.div
              key="banner-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-6">
              {/* Trust Details Left Side */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-white/90 font-bold text-xs tracking-wide uppercase">
                    Top Rated Unisex Salon in Burhanpur
                  </span>
                </div>
                <h3 className="text-xl md:text-3xl font-black text-white leading-tight uppercase tracking-tight">
                  Where Style Meets{" "}
                  <span className="text-amber-400">Transformation</span>
                </h3>
                <div className="flex flex-wrap gap-3 pt-1">
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                    <Users className="text-amber-400" size={14} />
                    <span className="text-white font-bold text-xs">
                      Master Stylists
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                    <ShieldCheck className="text-amber-400" size={14} />
                    <span className="text-white font-bold text-xs">
                      100% Hygienic Setup
                    </span>
                  </div>
                </div>
              </div>

              {/* Coupon Interactive Right Side */}
              <div className="lg:col-span-4 relative">
                <div className="relative bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/30 p-4 rounded-2xl flex items-center justify-between gap-4 shadow-xl">
                  <div className="text-left">
                    <div className="text-[9px] bg-amber-500 text-black px-2 py-0.5 rounded-full font-black uppercase tracking-wider inline-block mb-1">
                      Welcome Gift
                    </div>
                    <h4 className="text-2xl font-black text-white italic">
                      FLAT 50% OFF
                    </h4>
                    <p className="text-[10px] text-neutral-400 font-medium">
                      Valid on first luxury treatment visit
                    </p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="shrink-0 bg-amber-500 hover:bg-amber-400 text-black px-4 py-3 rounded-xl font-black text-xs uppercase tracking-wider active:scale-95 transition-all shadow-md flex items-center gap-1.5">
                    {copied ? (
                      <>
                        <Check size={12} strokeWidth={3} /> COPIED
                      </>
                    ) : (
                      "STYLORIA50"
                    )}
                  </button>
                </div>
              </div>

              {/* Dynamic Close Target - Rightmost Corner aligned */}
              <div className="lg:col-span-1 flex justify-end">
                <button
                  onClick={() => setIsBannerExpanded(false)}
                  className="w-12 h-12 rounded-full bg-white/5 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all border border-white/10 group shadow-lg">
                  <X
                    size={20}
                    className="group-hover:rotate-90 transition-transform duration-300"
                  />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- MOBILE NAVIGATION DRAWER SYSTEM --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#0a0a0a] z-[1000] flex flex-col p-8 pt-36 h-screen w-screen overflow-y-auto">
            <div className="flex flex-col gap-5">
              {[
                "Hair Cuts",
                "Hair Color",
                "Makeup",
                "Skin Care",
                "Bridal Services",
              ].map((item) => (
                <a
                  key={item}
                  href="https://maps.app.goo.gl/8XSSKuy7e3T81v7n6"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl sm:text-5xl font-black text-neutral-400 hover:text-amber-400 transition-colors">
                  {item}.
                </a>
              ))}
            </div>
            <div className="mt-auto border-t border-white/10 pt-8">
              <p className="text-amber-500 text-xs font-bold mb-1 tracking-widest">
                STYLORIA APPOINTMENTS
              </p>
              <a
                href="tel:+919755131359"
                className="text-2xl text-white font-black tracking-wide hover:text-amber-400 transition-colors block">
                +91 9755131359
              </a>
              <p className="text-[10px] text-neutral-500 mt-2 uppercase tracking-wider">
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
