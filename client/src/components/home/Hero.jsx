import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Scissors,
  ShieldCheck,
  Star,
  Sparkles,
  Phone,
} from "lucide-react";

// Video Import
import HeroVideo from "../../../src/assets/video.mp4";

const Hero = () => {
  // Animation Variants for Next-Level Smooth Transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <div className="relative min-h-screen w-full flex items-center bg-[#070708] overflow-hidden pt-20 md:pt-24 z-10">
      {/* 1. Background Video Layer - Fixed for Mobile Clarity */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center transform scale-105 lg:scale-105">
          <source src={HeroVideo} type="video/mp4" />
        </video>

        {/* Cinematic Gradient Overlays - Mobile shadow optimized */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#070708] lg:bg-gradient-to-r lg:from-black/95 lg:via-black/40 lg:to-transparent"></div>
      </div>

      {/* 2. Main Content Wrapper - 100% Fully Responsive */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-24 flex items-center min-h-[calc(100vh-5rem)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 max-w-5xl w-full">
          {/* Badge with Breathing Glow Animation */}
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center space-x-2.5 bg-black/80 border border-amber-500/40 px-4 py-2 rounded-full backdrop-blur-xl shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
              <Star size={14} className="text-amber-400 fill-amber-400" />
            </motion.div>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-amber-400">
              Burhanpur's Premier Unisex Salon
            </span>
          </motion.div>

          {/* Epic Typography with Next-Level High Visibility Border & Shadow */}
          <motion.div variants={itemVariants} className="w-full relative z-20">
            {/* Subtle backdrop container to pop the text from busy video backgrounds */}
            <div className="absolute -inset-4 bg-black/10 backdrop-blur-[2px] rounded-3xl -z-10 lg:hidden" />

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.90] tracking-tight text-white uppercase select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              <span
                className="block text-transparent mb-2 tracking-wide font-black"
                style={{
                  WebkitTextStroke: "2px #ffffff",
                  fontStyle: "italic",
                  filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.9))",
                }}>
                STYLORIA.
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 block sm:inline drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                UNISEX
              </span>{" "}
              <span
                className="text-white inline-block"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.6)",
                }}>
                SALON.
              </span>
            </h1>
          </motion.div>

          {/* Description updated with rich text shadows */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl font-bold leading-relaxed px-2 sm:px-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/20 lg:bg-transparent p-3 lg:p-0 rounded-xl backdrop-blur-[1px] lg:backdrop-blur-none">
            "See the mastery. Experience the transformation. Premium Haircuts,
            Couture Hair Color, Advanced Skin Care, and Luxury Bridal Services
            in Burhanpur."
          </motion.p>

          {/* Action Buttons - Links to Maps / Phone Call */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2 relative z-20">
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                // 1. Agar mobile menu open hai, toh use band karein
                if (typeof setMobileMenuOpen === "function")
                  setMobileMenuOpen(false);

                // 2. Client-side Single Page Application (SPA) routing bina page refresh ke
                window.history.pushState({}, "", "/book-appointment");
                const navEvent = new PopStateEvent("popstate");
                window.dispatchEvent(navEvent);

                // Optional: Agar direct page section par scroll karwana ho toh:
                // document.getElementById('appointment-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 30px rgba(245, 158, 11, 0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_4px_15px_rgba(245,158,11,0.3)] transition-all duration-300 cursor-pointer border-none outline-none">
              Book Your Appointment
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </motion.button>

            <motion.a
              href="tel:+916268762390"
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255,255,255,1)",
                color: "#000",
              }}
              whileTap={{ scale: 0.97 }}
              className="group border-2 border-white/90 text-white px-8 py-4 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-3 bg-black/40 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all duration-300">
              <Phone size={16} className="group-hover:animate-bounce" />
              Call Styloria
            </motion.a>
          </motion.div>

          {/* Micro-Feature Matrix Updated for Unisex Salon Offerings */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 md:pt-12 border-t border-white/10 w-full relative z-20">
            {[
              { icon: <Scissors size={18} />, text: "Hair & Color" },
              { icon: <Sparkles size={18} />, text: "Bridal & Makeup" },
              { icon: <Star size={18} />, text: "Skin Care Experts" },
              { icon: <ShieldCheck size={18} />, text: "100% Hygienic" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center lg:justify-start space-x-2.5 text-gray-300 bg-black/40 lg:bg-transparent p-3.5 lg:p-0 rounded-xl border border-white/10 lg:border-none backdrop-blur-md lg:backdrop-blur-none shadow-[0_4px_10px_rgba(0,0,0,0.3)] lg:shadow-none">
                <div className="text-amber-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {item.icon}
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Floating Brand Decorative text */}
      <div className="absolute bottom-10 right-10 z-20 hidden xl:block select-none pointer-events-none">
        <div className="rotate-90 origin-right text-white/5 font-black tracking-[20px] uppercase text-6xl">
          BURHANPUR
        </div>
      </div>
    </div>
  );
};

export default Hero;
