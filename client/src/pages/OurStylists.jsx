import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Star, Instagram, Calendar, Sparkles } from "lucide-react";

// Premium Stylist Database
const stylists = [
  {
    id: 1,
    name: "Marcus Vance",
    role: "Master Barber & Founder",
    specialty: "Signature Haircuts & Razor Detailing",
    experience: "12+ Years",
    rating: "4.9",
    reviews: "1,420",
    instagram: "@marcus_hunkbarber",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800",
    bio: "An expert in classic British tailoring and grooming. Marcus has styled elite celebrities and specializes in advanced beard architecture.",
    tags: ["Beard Expert", "Classic Cuts"],
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Senior Artistic Director",
    specialty: "Luxury Hair Spa & Modern Styling",
    experience: "8 Years",
    rating: "5.0",
    reviews: "980",
    instagram: "@elena_stylist_lounge",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800",
    bio: "Trained in Paris, Elena brings avant-garde hair texturing techniques and premium scalp rejuvenation therapies to our lounge.",
    tags: ["Hair Spa Guru", "Modern Texture"],
  },
  {
    id: 3,
    name: "Kenji Takahashi",
    role: "Elite Grooming Specialist",
    specialty: "Facial Aesthetics & Charcoal Detox",
    experience: "6 Years",
    rating: "4.8",
    reviews: "750",
    instagram: "@kenji_hunk_skin",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    bio: "Kenji beautifully blends traditional luxury hospitality with ultra-modern skin brightening and hot-towel grooming treatments.",
    tags: ["Skin Care", "Sharp Fades"],
  },
];

const StylistsPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-20 md:pt-32 pb-10 md:pb-20 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Title Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-6 md:gap-8 border-b border-neutral-200/60 pb-8 md:pb-12">
          <div className="w-full lg:max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-amber-700 font-black tracking-[0.2em] uppercase text-[9px] md:text-[10px]">
                The Craftsmanship
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-neutral-900 tracking-tighter leading-[0.9]">
              Meet Our <br className="hidden md:block" />
              <span className="text-neutral-400">Artists.</span>
            </h1>
          </div>

          <div className="w-full lg:w-80 text-left lg:text-right">
            <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-medium">
              Our international master stylists don't just cut hair—they
              architect look transformations custom-tailored to your unique
              personality.
            </p>
          </div>
        </div>

        {/* Stylists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {stylists.map((stylist) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stylist.id * 0.1 }}
              onMouseEnter={() => setHoveredCard(stylist.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-4 md:p-5 shadow-xl shadow-neutral-200/40 border border-neutral-100 relative overflow-hidden flex flex-col justify-between">
              <div>
                {/* Image Container with Dynamic Zoom */}
                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-neutral-100 mb-6 md:mb-8">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Premium Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Overlay Meta Info */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                    <div>
                      <p className="text-[10px] font-black tracking-widest text-amber-400 uppercase mb-1">
                        {stylist.experience} EXP
                      </p>
                      <h3 className="text-2xl font-black tracking-tight leading-none uppercase">
                        {stylist.name}
                      </h3>
                    </div>
                    {/* Rating Badge */}
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-xl text-xs font-bold border border-white/10">
                      <Star
                        size={12}
                        fill="#fbbf24"
                        className="text-amber-400"
                      />
                      <span>{stylist.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Info Text Area */}
                <div className="px-2 md:px-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Scissors size={12} className="text-amber-500" />
                    <span className="text-[9px] font-bold text-amber-700 uppercase tracking-widest">
                      {stylist.role}
                    </span>
                  </div>

                  <p className="text-neutral-400 text-[11px] font-bold uppercase tracking-wider mb-3">
                    Specializes in:{" "}
                    <span className="text-neutral-800">
                      {stylist.specialty}
                    </span>
                  </p>

                  <p className="text-neutral-500 text-xs md:text-sm leading-relaxed mb-6 opacity-90">
                    {stylist.bio}
                  </p>

                  {/* Stylist Specialty Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {stylist.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-neutral-50 border border-neutral-200/60 px-3 py-1 rounded-full text-[9px] font-bold text-neutral-500 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Action Row */}
              <div className="px-2 md:px-4 pb-2 mt-auto">
                <div className="flex items-center justify-between bg-neutral-50 p-3 md:p-4 rounded-2xl md:rounded-[2rem] group-hover:bg-amber-50/50 transition-colors">
                  {/* Social Handle */}
                  <a
                    href={`https://instagram.com/${stylist.instagram}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 pl-1 md:pl-2 text-neutral-400 hover:text-amber-600 transition-colors">
                    <Instagram size={14} />
                    <span className="text-xs font-medium tracking-tight">
                      {stylist.instagram}
                    </span>
                  </a>

                  {/* Direct Book Button */}
                  <button className="flex items-center gap-2 px-4 md:px-5 py-3 bg-neutral-950 text-white rounded-xl md:rounded-[1.5rem] font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-md hover:bg-amber-500 hover:text-black transition-all active:scale-95">
                    <Calendar size={12} />
                    <span>Book Slot</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Booking CTA Banner */}
        <div className="mt-20 md:mt-28 p-0.5 md:p-1 rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-r from-amber-400 via-amber-600 to-neutral-900">
          <div className="bg-white rounded-[2.4rem] md:rounded-[3.4rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 text-center lg:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-50 rounded-2xl md:rounded-[2rem] flex items-center justify-center text-amber-600 shrink-0">
                <Sparkles size={32} />
              </div>
              <div>
                <h2 className="text-xl md:text-3xl font-black text-neutral-900 mb-1 md:mb-2 uppercase tracking-tight">
                  Prefer a VIP Private Cabin?
                </h2>
                <p className="text-neutral-500 text-xs md:text-sm max-w-xl">
                  Reserve our elite master barbers in advance for private 1-on-1
                  grooming sessions. Walk-in slots are highly limited.
                </p>
              </div>
            </div>
            <button className="w-full lg:w-auto px-8 md:px-10 py-4 md:py-5 bg-neutral-950 text-white rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-black hover:shadow-xl active:scale-95 transition-all">
              Reserve VIP Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylistsPage;
