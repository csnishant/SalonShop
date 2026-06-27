import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Heart,
  Smile,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const StyloriaServices = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "hair", label: "Hair & Styling", icon: <Scissors size={16} /> },
    { id: "skin", label: "Skin & Facials", icon: <Smile size={16} /> },
    { id: "makeup", label: "Makeup & Bridal", icon: <Heart size={16} /> },
  ];

  const servicesData = [
    {
      id: 1,
      category: "hair",
      title: "Trendsetting Haircuts",
      desc: "Precision cutting tailored to your face structure, hair texture, and personal aesthetic profile.",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
      features: [
        "Advanced Texturizing",
        "Custom Fringe & Layers",
        "Hair Wash & Conditioning",
        "Blow-dry Styling Included",
      ],
      popular: true,
    },
    {
      id: 2,
      category: "hair",
      title: "Couture Hair Color",
      desc: "From full coverage global color transitions to dimensional hand-painted highlights and balayage.",
      image:
        "https://images.unsplash.com/photo-1605497746444-ac9da58d440d?auto=format&fit=crop&w=600&q=80",
      features: [
        "Ammonia-Free Safe Formulas",
        "Balayage & Ombre Techniques",
        "High-Shine Gloss Finish",
        "Color-Lock Treatments",
      ],
      popular: false,
    },
    {
      id: 3,
      category: "skin",
      title: "Advanced Skin Care",
      desc: "Rejuvenating, skin-specific facial treatments engineered to eliminate impurities and restore your natural tone.",
      image:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
      features: [
        "Deep Pore Hydra Cleansing",
        "Collagen Defying Lifting",
        "Detoxifying Herbal Masques",
        "Brightening Vitamin Infusions",
      ],
      popular: true,
    },
    {
      id: 4,
      category: "makeup",
      title: "Celebrity Makeup",
      desc: "Flawless HD application styles optimized for evening galas, professional shoots, and elite party events.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
      features: [
        "Flawless Matte Finish",
        "Smudge-Resistant Contour",
        "Premium Lashes Included",
        "Waterproof Architecture",
      ],
      popular: false,
    },
    {
      id: 5,
      category: "makeup",
      title: "Luxury Bridal Services",
      desc: "The complete, premium bridal package combining custom look consultations, hair architecture, and makeup styling.",
      image:
        "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&w=600&q=80",
      features: [
        "High Definition Airbrush",
        "Dupatta & Veil Drapery",
        "Long-Wear Jewelry Setting",
        "Pre-Bridal Glow Therapies",
      ],
      popular: true,
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((service) => service.category === activeCategory);

  return (
    <section className="bg-[#fcfbfc] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Block Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/60 px-4 py-1.5 rounded-full">
            <Sparkles size={14} className="text-amber-600 fill-amber-600" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-700">
              Styloria Experience Menu
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight uppercase">
            Crafting Perfection <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
              For Hair, Makeup & Skin
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-medium max-w-xl mx-auto">
            Explore our meticulously crafted unisex menu. Every service is
            custom-calibrated to match your individual skin profiles and hair
            metrics.
          </p>
        </div>

        {/* Dynamic Category Navigation Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-neutral-900 text-white shadow-xl shadow-neutral-900/10 scale-105"
                  : "bg-white text-neutral-600 border border-neutral-200/80 hover:bg-neutral-50 hover:border-neutral-300"
              }`}>
              {cat.icon && (
                <span
                  className={
                    activeCategory === cat.id
                      ? "text-amber-400"
                      : "text-neutral-400"
                  }>
                  {cat.icon}
                </span>
              )}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Multi-Card Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                className="group bg-white rounded-3xl border border-neutral-200/60 shadow-md hover:shadow-2xl hover:border-neutral-300/80 transition-all duration-300 overflow-hidden flex flex-col">
                {/* Image Aspect Wrapper */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {service.popular && (
                    <span className="absolute top-4 right-4 bg-amber-500 text-neutral-900 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      Popular Selection
                    </span>
                  )}
                </div>

                {/* Content Block Elements */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-neutral-900 uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 text-xs sm:text-sm font-medium leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Micro-Bullet Detailed List */}
                    <ul className="space-y-2 pt-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-neutral-700 text-xs font-semibold">
                          <CheckCircle2
                            size={15}
                            className="text-amber-600 shrink-0 mt-0.5"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Immediate Card Booking Vector */}
                  <div className="pt-6 mt-6 border-t border-neutral-100">
                    <a
                      href="maps.app.goo.gl/8XSSKuy7e3T81v7n6?g_st=com.google.maps.preview.copy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-700 hover:text-neutral-900 transition-colors group/link">
                      Book Session
                      <ChevronRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Action Footer Banner Matrix */}
        <div className="mt-20 bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-12 shadow-xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 uppercase tracking-tight">
              Ready for your makeover?
            </h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2.5 text-neutral-700 text-xs sm:text-sm font-bold">
                <MapPin size={16} className="text-amber-600 shrink-0" />
                <span>
                  Indra Colony, Opp. Anand Green Restaurant, Burhanpur
                </span>
              </p>
              <p className="text-neutral-500 text-[11px] sm:text-xs font-medium pl-6">
                Open Daily • Premium Safety Standard Protocols Always Active
              </p>
            </div>
          </div>

            
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <a
              href="tel:+916268762390"
              className="flex items-center justify-center gap-2 bg-neutral-100 border border-neutral-200 hover:bg-neutral-200 text-neutral-900 px-6 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all">
              <Phone size={14} />
              Call 6268762390
            </a>

            <a
              href="maps.app.goo.gl/8XSSKuy7e3T81v7n6?g_st=com.google.maps.preview.copy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-900 px-6 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-md shadow-amber-500/10">
              Secure Seat Now
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyloriaServices;
