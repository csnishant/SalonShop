import React from "react";
import { motion } from "framer-motion";
import { Star, X } from "lucide-react";

const OfferBanner = ({ copied, onCopy, onClose }) => {
  return (
    <motion.div
      key="banner-content"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full flex flex-col md:grid md:grid-cols-12 gap-3 items-center py-4 text-white relative">
      {/* Left side text info */}
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

      {/* Coupon box */}
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
            onClick={onCopy}
            className="shrink-0 bg-amber-500 text-black px-3 py-1.5 rounded-lg font-black text-[10px] tracking-widest transition-all active:scale-95 shadow-md hover:bg-amber-400">
            {copied ? "COPIED" : "STYLORIA50"}
          </button>
        </div>
      </div>

      {/* Close button */}
      <div className="absolute right-0 top-3 md:relative md:top-0 md:col-span-1 flex justify-end">
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full bg-white/5 text-white flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
          <X size={14} />
        </button>
      </div>
    </motion.div>
  );
};

export default OfferBanner;
