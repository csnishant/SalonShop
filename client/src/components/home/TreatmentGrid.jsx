import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Sparkles,
  Scissors,
} from "lucide-react";

const services = [
  {
    title: "Advanced Hair Engineering",
    tag: "Master Barbering",
    desc: "Precision fades, customized textures, and sharp profile structure tailored exactly to your hair type and head shape.",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800",
    color: "from-amber-500/20",
  },
  {
    title: "Bespoke Beard Crafting",
    tag: "Luxury Detailing",
    desc: "Hot towel therapy, straight-razor detailing, and signature oil massage infusions for immaculate beard geometry.",
    img: "https://images.unsplash.com/photo-1621834676084-f356f4393014?q=80&w=800",
    color: "from-orange-500/20",
  },
  {
    title: "Luxury Skin & Spa Detox",
    tag: "Elite Refinement",
    desc: "Deep-cleansing charcoal masks, anti-tan treatments, and premium facial therapies designed explicitly for men's skin health.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
    color: "from-yellow-500/20",
  },
];

const TreatmentGrid = () => {
  return (
    <section className="py-32 bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Apple Style Premium Header Layout */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black uppercase tracking-widest mb-4">
              <Sparkles size={12} /> Our Specializations
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tighter leading-[0.9] mb-4">
              Signature <br />{" "}
              <span className="text-neutral-400">Grooming.</span>
            </h2>
          </div>
          <p className="text-neutral-500 font-medium max-w-xs text-sm leading-relaxed border-l-2 border-neutral-200 pl-6">
            Blending master barber craft with high-end premium hospitality for
            sharp styles that upgrade your daily look.
          </p>
        </div>

        {/* Dynamic Hover Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className="relative group h-[550px] rounded-[3rem] overflow-hidden shadow-xl shadow-neutral-200 bg-white border border-neutral-100">
              {/* Media Wrap with Parallax Motion Engine */}
              <div className="absolute inset-0">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Deep Multi-Layer Color Overlays */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${s.color} to-transparent opacity-60`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              </div>

              {/* Top Context Category Tags */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                <div className="px-4 py-2 bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl text-white text-[10px] font-bold uppercase tracking-widest">
                  {s.tag}
                </div>
                <div className="w-10 h-10 bg-black/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-amber-400">
                  <Scissors size={18} />
                </div>
              </div>

              {/* Bottom Info Sheet - Slides upward smoothly on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={12} fill="currentColor" />
                  ))}
                </div>

                <h3 className="text-3xl font-black text-white mb-4 leading-tight tracking-tight">
                  {s.title}
                </h3>

                <p className="text-neutral-300 text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-8">
                  {s.desc}
                </p>

                {/* Micro Interactive Booking Trigger */}
                <button className="w-full py-4 bg-white rounded-2xl text-neutral-950 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                  Book Service <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lower Trust Matrix Footer element */}
        <div className="mt-20 py-10 border-t border-neutral-200 flex flex-wrap justify-center gap-12 opacity-60">
          <div className="flex items-center gap-2 font-black text-[10px] tracking-widest text-neutral-600">
            <ShieldCheck size={16} className="text-amber-500" /> PREMIUM IMPORTS
          </div>
          <div className="flex items-center gap-2 font-black text-[10px] tracking-widest text-neutral-600">
            <ShieldCheck size={16} className="text-amber-500" /> 100% HYGIENIC
          </div>
          <div className="flex items-center gap-2 font-black text-[10px] tracking-widest text-neutral-600">
            <ShieldCheck size={16} className="text-amber-500" /> TOP RATED
            LOUNGE
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentGrid;
