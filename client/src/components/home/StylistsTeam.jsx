import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const teamData = [
  {
    name: "Vikram Singh",
    role: "Hair Specialist & Owner",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Rahul Sharma",
    role: "Beard Expert",
    img: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Arjun Mehta",
    role: "Senior Hair Stylist",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sunny Khurana",
    role: "Facial & Skin Expert",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
];

// Doubling the list to create a seamless infinite loop train effect
const doubleTeamData = [...teamData, ...teamData, ...teamData];

const StylistsTeam = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Soft Background Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-50/60 rounded-full blur-[120px] -z-10" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-100 text-amber-800 text-xs font-bold mb-4">
          <Sparkles size={14} className="fill-amber-500 text-amber-500" />
          <span>Meet Our Experts</span>
        </motion.div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-neutral-900 tracking-tight uppercase leading-none">
          Our Team of <br />
          <span className="text-amber-500">Master Stylists.</span>
        </h2>
      </div>

      {/* Infinite Train Slider Track */}
      <div className="relative w-full flex overflow-x-hidden py-4 mask-gradient">
        <motion.div
          className="flex gap-8 pr-8 justify-start items-center min-w-full whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25, // Adjust this number to change speed (higher = slower train)
            repeat: Infinity,
          }}>
          {doubleTeamData.map((stylist, index) => (
            <div
              key={index}
              className="inline-block text-center w-52 bg-neutral-50/50 p-5 rounded-3xl border border-neutral-100/80 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300 group cursor-pointer">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                {/* Gold Outer Glow Ring on Hover */}
                <div className="absolute inset-0 bg-amber-500 rounded-full scale-0 group-hover:scale-105 transition-transform duration-300 ease-out opacity-20" />
                <img
                  src={stylist.img}
                  alt={stylist.name}
                  className="w-full h-full object-cover rounded-full border-2 border-white shadow-sm"
                />
              </div>

              <h4 className="text-lg font-bold text-neutral-900 tracking-tight group-hover:text-amber-600 transition-colors duration-200">
                {stylist.name}
              </h4>

              <p className="text-xs font-semibold text-amber-600/90 mt-1">
                {stylist.role}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CSS style injected helper for fade edges */}
      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
      `}</style>
    </section>
  );
};

export default StylistsTeam;
