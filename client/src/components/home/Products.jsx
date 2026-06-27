import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Sparkles,
  Scissors,
  ShoppingBag,
  Eye,
} from "lucide-react";



const products = [
  {
    name: "Matte Clay Pomade",
    brand: "Styloria Professional",
    price: "₹799",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=500",
    badge: "Best Seller",
  },
  {
    name: "Argan Nourishing Hair Oil",
    brand: "Luxury Care",
    price: "₹1,249",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=500",
    badge: "Premium",
  },
  {
    name: "Activated Charcoal Facewash",
    brand: "Skin Detox Matrix",
    price: "₹550",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=500",
    badge: "New Launch",
  },
  {
    name: "Premium Beard Growth Elixir",
    brand: "Beard Geometry",
    price: "₹899",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1626015713026-d837d1724c9f?q=80&w=500",
    badge: "100% Organic",
  },
];

const TreatmentGrid = () => {
  return (
    <section className="py-20 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
     

        {/* ================= LUXURY PRODUCTS SECTION ================= */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 border-t border-neutral-200/60 pt-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-[10px] font-black uppercase tracking-widest mb-3">
              <ShoppingBag size={11} className="text-amber-400" /> Styloria Home
              Care
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight uppercase">
              Premium Salon <span className="text-amber-500">Products</span>
            </h2>
          </div>
          <p className="text-neutral-500 font-medium text-xs sm:text-sm max-w-xs">
            Maintain your runway-ready appearance at home with our authentic,
            premium-grade formulation lineup.
          </p>
        </div>

        {/* Compact 4-Column Balanced Product Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl border border-neutral-200/50 p-3 flex flex-col justify-between group hover:shadow-xl hover:border-amber-500/20 transition-all duration-300">
              <div>
                {/* Product Image Window */}
                <div className="relative aspect-square w-full rounded-xl bg-neutral-50 overflow-hidden mb-4">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle Action Overlay on Image Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-2.5 bg-white rounded-full text-neutral-900 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye size={16} />
                    </span>
                  </div>

                  {/* Micro Badge Element */}
                  <span className="absolute top-2 left-2 bg-neutral-900/90 backdrop-blur-sm text-white text-[8px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md">
                    {p.badge}
                  </span>
                </div>

                {/* Text Metadata Panel */}
                <div className="px-1 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    {p.brand}
                  </span>
                  <h4 className="text-sm font-black text-neutral-800 tracking-tight group-hover:text-amber-600 transition-colors line-clamp-1">
                    {p.name}
                  </h4>

                  <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500 pt-0.5">
                    <Star size={11} fill="currentColor" />
                    <span>{p.rating}</span>
                    <span className="text-neutral-300 font-normal">
                      | Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Price & Purchase Interface Base */}
              <div className="pt-4 px-1 mt-3 flex items-center justify-between border-t border-neutral-100">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest leading-none">
                    MSRP
                  </span>
                  <span className="text-base font-black text-neutral-900 tracking-tight">
                    {p.price}
                  </span>
                </div>

                <a
                  href="https://maps.app.goo.gl/8XSSKuy7e3T81v7n6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-neutral-50 hover:bg-amber-500 border border-neutral-200/70 hover:border-amber-500 text-neutral-800 hover:text-black rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-colors duration-200">
                  Buy Instore
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= LOWER TRUST MATRIX FOOTER ================= */}
        <div className="mt-20 py-8 border-t border-neutral-200/60 flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
          <div className="flex items-center gap-2 font-black text-[10px] tracking-widest text-neutral-600">
            <ShieldCheck size={15} className="text-amber-500" /> GENUINE BRANDS
            ONLY
          </div>
          <div className="flex items-center gap-2 font-black text-[10px] tracking-widest text-neutral-600">
            <ShieldCheck size={15} className="text-amber-500" /> 100% HYGIENIC
            ENVIRONMENT
          </div>
          <div className="flex items-center gap-2 font-black text-[10px] tracking-widest text-neutral-600">
            <ShieldCheck size={15} className="text-amber-500" /> BURHANPUR'S
            PREMIER LOUNGE
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentGrid;
