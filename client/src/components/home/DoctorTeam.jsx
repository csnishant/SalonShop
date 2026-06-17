import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const stylists = [
  {
    name: "Vikram Singh",
    role: "Master Barber & Founder",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Rahul Sharma",
    role: "Beard Architect Expert",
    img: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Arjun Mehta",
    role: "Hair Engineering Specialist",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sunny Khurana",
    role: "Luxury Skin & Detan Consultant",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
];

const StylistsTeam = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Micro Blur Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-50/60 rounded-full blur-[120px] -z-10" />

      {/* Apple Style Premium Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest mb-4">
          <Sparkles size={12} /> The Elite Crew
        </motion.div>
        <h2 className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tighter leading-[0.9]">
          Master Stylists. <br />
          <span className="text-neutral-400">Pure Craftsmanship.</span>
        </h2>
      </div>

      {/* Grid Architecture */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stylists.map((stylist, i) => (
          <div key={i} className="text-center group cursor-pointer">
            <div className="w-48 h-48 mx-auto mb-6 relative">
              {/* Premium Outer Ring Scale Animation */}
              <div className="absolute inset-0 bg-amber-500 rounded-full scale-0 group-hover:scale-105 transition-transform duration-500 ease-out opacity-20" />

              <img
                src={stylist.img}
                alt={stylist.name}
                className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white transition-all duration-500 group-hover:shadow-xl"
              />
            </div>

            <h4 className="text-xl font-black text-neutral-900 tracking-tight transition-colors duration-300 group-hover:text-amber-600">
              {stylist.name}
            </h4>

            <p className="text-[10px] text-neutral-400 font-black uppercase tracking-widest mt-1">
              {stylist.role}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Trigger Row */}
      <div className="text-center mt-20">
        <button className="border-2 border-neutral-900 rounded-2xl px-10 py-4 font-black text-xs uppercase tracking-widest bg-transparent text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 active:scale-95 shadow-sm">
          Meet Our Complete Crew
        </button>
      </div>
    </section>
  );
};

export default StylistsTeam;
