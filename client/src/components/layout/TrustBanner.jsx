import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Check,
  Star,
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react";

// Salon vibe light horizontal nudge animation
const swipeAnimation = {
  x: [-1, 1, -1, 1, 0],
  transition: {
    duration: 0.8,
    repeat: Infinity,
    repeatDelay: 3,
    ease: "easeInOut",
  },
};

const TrustBanner = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track window scroll coordinates to toggle solid states
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = (e) => {
    e.stopPropagation(); // Prevents banner collapse toggle
    navigator.clipboard.writeText("STYLORIA50");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full font-sans relative z-[10002]">
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className={`transition-all duration-500 cursor-pointer border-b ${
          isScrolled || isExpanded
            ? "bg-[#0f0f0f]/95 backdrop-blur-md border-amber-500/20 shadow-xl"
            : "bg-transparent border-transparent"
        }`}>
        {/* 📱 Mobile Optimized Height adjustments */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 sm:py-2.5 flex items-center justify-between min-h-[36px] sm:min-h-[auto]">
          {/* Left Side: Combined Minimal Info layout */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* User Avatars - Hidden on mobile entirely to maximize screen estate */}
            <div className="hidden sm:flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#070708] object-cover"
                  src={`https://images.unsplash.com/photo-${
                    i === 1
                      ? "1562322140-8baeececf3df"
                      : i === 2
                        ? "1605497746444-ac9da58d440d"
                        : "1596178065887-1198b6148b2b"
                  }?auto=format&fit=crop&w=100&q=80`}
                  alt="Satisfied Client"
                />
              ))}
            </div>

            {/* ⚡ Mobile Ultra-Slim Ticker Container */}
            <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
              <p className="hidden sm:block text-[11px] md:text-[12px] font-bold text-neutral-300 tracking-wide uppercase">
                Styled by{" "}
                <span className="text-amber-400">
                  Expert Stylists & Makeup Artists
                </span>
              </p>

              {/* Micro Status Pill Wrapper */}
              <motion.div
                animate={swipeAnimation}
                className={`flex items-center gap-2 px-2.5 py-0.5 rounded-full border transition-colors duration-500 ${
                  isScrolled || isExpanded
                    ? "bg-amber-500/10 border-amber-500/30"
                    : "bg-black/60 backdrop-blur-sm border-white/10"
                }`}>
                {/* Breathing Status Indicator Ring */}
                <span className="flex h-1.5 w-1.5 shrink-0 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                </span>

                <span className="text-[8px] sm:text-[9px] font-black text-amber-400 uppercase tracking-wider sm:tracking-widest whitespace-nowrap">
                  Get First Visit Exclusive Offer
                </span>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Interaction Indicator */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 pl-2">
            <span className="hidden md:block text-[9px] font-bold text-amber-500/60 uppercase tracking-wider">
              {isExpanded ? "Close Details" : "View Exclusive Offer"}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="text-amber-400/60">
              <ChevronDown size={14} className="sm:w-4 sm:h-4" />
            </motion.div>
          </div>
        </div>

        {/* Expandable Panel Matrix */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden">
              <div className="bg-[#0f0f0f] border-t border-white/5 px-4 sm:px-6 py-6 sm:py-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  {/* Trust Proof Side */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-white font-bold text-[11px] sm:text-xs">
                        Top Rated Unisex Salon in Burhanpur
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tight">
                      Where Style Meets{" "}
                      <span className="text-amber-400">Transformation</span>.
                      Trusted for Hair, Makeup & Skin Care.
                    </h3>

                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                      <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 p-2.5 sm:p-3 rounded-xl border border-white/5">
                        <Users className="text-amber-400 shrink-0" size={16} />
                        <div>
                          <p className="text-white font-bold text-[11px] sm:text-xs">
                            Master Stylists
                          </p>
                          <p className="text-neutral-400 text-[8px] sm:text-[9px] uppercase tracking-wider">
                            Hair & Bridal Experts
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 p-2.5 sm:p-3 rounded-xl border border-white/5">
                        <ShieldCheck
                          className="text-amber-400 shrink-0"
                          size={16}
                        />
                        <div>
                          <p className="text-white font-bold text-[11px] sm:text-xs">
                            100% Hygienic
                          </p>
                          <p className="text-neutral-400 text-[8px] sm:text-[9px] uppercase tracking-wider">
                            Sanitized & Safe Environment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Voucher Action Side */}
                  <div className="relative pt-2 sm:pt-0">
                    <div className="absolute inset-0 bg-amber-500/5 blur-[30px] rounded-full" />
                    <div className="relative bg-white/5 border border-white/10 p-5 sm:p-6 rounded-2xl text-center space-y-3">
                      <div className="inline-block bg-amber-500/20 text-amber-400 text-[8px] sm:text-[9px] font-black px-3 py-0.5 rounded-full uppercase tracking-widest">
                        Welcome Discount
                      </div>
                      <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-white italic tracking-tighter">
                        FLAT 50% <span className="text-amber-400">OFF</span>
                      </h4>
                      <p className="text-neutral-400 text-[11px] sm:text-xs font-medium">
                        On your first visit for luxury skin treatments, couture
                        hair coloring, or premium grooming.
                      </p>

                      <button
                        onClick={handleCopy}
                        className="w-full relative group overflow-hidden bg-amber-500 text-black px-4 py-2.5 sm:py-3 rounded-xl font-black text-[11px] sm:text-xs uppercase transition-all hover:bg-amber-400 active:scale-95 shadow-lg">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {copied ? (
                            <>
                              <Check size={12} strokeWidth={3} /> COPIED!
                            </>
                          ) : (
                            <>USE CODE: STYLORIA50</>
                          )}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Live Activity Footer */}
                <div className="mt-5 flex justify-center items-center gap-2 border-t border-white/5 pt-3">
                  <Sparkles size={11} className="text-amber-500" />
                  <span className="text-neutral-500 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest">
                    Bridal & Groom Appointments booking fast for the season
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TrustBanner;
