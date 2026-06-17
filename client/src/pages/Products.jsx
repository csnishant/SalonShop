import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Sparkles, Scissors, Star } from "lucide-react";

// सैलून और ग्रूमिंग प्रोडक्ट्स का डेटा
const products = [
  {
    id: 1,
    name: "Matte Clay Pomade",
    category: "Hair Styling",
    price: "85.00",
    desc: "Strong hold with a natural matte finish. Infused with argan oil for active root nourishment.",
    image:
      "https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=800",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Premium Beard Architecture Oil",
    category: "Beard Care",
    price: "120.00",
    desc: "Sandalwood blended grooming oil designed for hot towel absorption and intense skin hydration.",
    image:
      "https://images.unsplash.com/photo-1626015713026-d8309d9724e2?q=80&w=800",
    tag: "Lounge Choice",
  },
  {
    id: 3,
    name: "Charcoal Face Detox Scrub",
    category: "Skin Care",
    price: "95.00",
    desc: "Elite deep-cleansing exfoliator with activated charcoal for instant brightness.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800",
    tag: "New Arrival",
  },
];

const categories = ["All", "Hair Styling", "Beard Care", "Skin Care"];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
      p.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-20 md:pt-32 pb-10 md:pb-20 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Title & Search Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-16 gap-6 md:gap-8 border-b border-neutral-200/60 pb-8 md:pb-12">
          <div className="w-full lg:max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-amber-700 font-black tracking-[0.2em] uppercase text-[9px] md:text-[10px]">
                Handsome Hunk Lounge
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-neutral-900 tracking-tighter leading-[0.9]">
              Grooming <br className="hidden md:block" />
              <span className="text-neutral-400">Essentials.</span>
            </h1>
          </div>

          <div className="relative w-full lg:w-96 group mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-white border border-neutral-200/80 py-4 md:py-5 pl-12 md:pl-14 pr-6 rounded-2xl md:rounded-[2rem] shadow-sm focus:shadow-xl focus:border-amber-500/30 transition-all outline-none text-sm font-medium"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-neutral-400 group-hover:text-amber-500 transition-colors"
              size={18}
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex gap-2 md:gap-3 mb-10 md:mb-16 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth snap-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all duration-300 snap-start ${
                selectedCategory === cat
                  ? "bg-amber-500 text-black shadow-xl scale-105"
                  : "bg-white text-neutral-500 border border-neutral-200/60 hover:bg-neutral-50 shadow-sm"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-4 md:p-5 shadow-xl shadow-neutral-200/40 border border-neutral-100 relative overflow-hidden flex flex-col justify-between">
                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-neutral-50 mb-6 md:mb-8">
                  {/* Tag */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-[8px] font-black uppercase tracking-widest text-amber-400 shadow-sm">
                      {product.tag}
                    </div>
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 md:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
                </div>

                <div className="px-2 md:px-4 pb-2">
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <Scissors size={12} className="text-amber-500" />
                    <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-neutral-900 leading-tight mb-3 tracking-tight">
                    {product.name}
                  </h3>

                  <p className="text-neutral-500 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 opacity-90 line-clamp-2 md:line-clamp-none">
                    {product.desc}
                  </p>

                  <div className="flex items-center justify-between bg-neutral-50 p-3 md:p-4 rounded-2xl md:rounded-[2rem] group-hover:bg-amber-50/50 transition-colors">
                    <div className="pl-1 md:pl-2">
                      <p className="text-[8px] font-black text-neutral-400 uppercase mb-0.5">
                        PRICE
                      </p>
                      <p className="text-lg md:text-xl font-black text-neutral-900">
                        RM {product.price}
                      </p>
                    </div>

                    <button className="h-12 w-12 md:h-14 md:w-14 bg-neutral-950 rounded-2xl md:rounded-3xl flex items-center justify-center text-white shadow-lg hover:bg-amber-500 hover:text-black transition-all active:scale-90">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Premium Salon Quality Banner */}
        <div className="mt-16 md:mt-24 p-0.5 md:p-1 rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-r from-amber-400 via-amber-600 to-neutral-900">
          <div className="bg-white rounded-[2.4rem] md:rounded-[3.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-50 rounded-2xl md:rounded-[2rem] flex items-center justify-center text-amber-600 shrink-0">
                <Sparkles size={32} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-black text-neutral-900 mb-1 md:mb-2">
                  100% Signature Quality
                </h2>
                <p className="text-neutral-500 text-xs md:text-sm max-w-sm">
                  Every product is curated by our master stylists and used in
                  our luxury daily lounge therapies.
                </p>
              </div>
            </div>
            <button className="w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-neutral-950 text-white rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-black hover:shadow-xl active:scale-95 transition-all">
              Consult a Stylist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
