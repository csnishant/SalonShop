import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amit Malviya",
    service: "Signature Fade & Styling",
    feedback:
      "Absolutely world-class style engineering! Best skin fade I've ever had in Hoshangabad. The master barbers truly know facial geometry.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Rohan Chaudhary",
    service: "Beard Architecture",
    feedback:
      "The hot towel routine combined with clean straight-razor precision is an absolute luxury. Handsome Hunk is my definitive grooming lounge.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Rajput",
    service: "Luxury Hair Spa & Detox",
    feedback:
      "Immaculate attention to hygiene, premium international products, and an incredibly peaceful luxury ambience. Exceptional value.",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Side: Header & Premium Social Proof */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-100">
            <Star className="text-amber-500 fill-amber-500" size={14} />
            <span className="text-[10px] font-black text-amber-800 uppercase tracking-widest">
              4.9/5 Guest Satisfaction Rating
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tighter leading-[0.9]">
            Stories of <br />
            <span className="text-neutral-400">Refinement.</span>
          </h2>

          <p className="text-neutral-500 text-lg max-w-md leading-relaxed">
            Real transformations, sharp styles. Look at how our master grooming
            blueprints elevate looks across Hoshangabad.
          </p>

          {/* iOS Style Micro Navigation Controls */}
          <div className="flex gap-4 pt-6">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all active:scale-90">
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-2xl bg-neutral-900 flex items-center justify-center text-white shadow-lg hover:shadow-neutral-950/20 hover:-translate-y-1 transition-all active:scale-90">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Side: Animated Card Stack Interface */}
        <div className="relative h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, x: 100, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -100, rotate: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-full max-w-[450px] bg-white rounded-[3rem] p-10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-neutral-100 relative">
              {/* Premium Quote Icon Badge Overlay */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-amber-500 rounded-3xl flex items-center justify-center text-black shadow-xl shadow-amber-500/20">
                <Quote fill="currentColor" size={24} />
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[index].image}
                    className="w-16 h-16 rounded-2xl object-cover border border-neutral-100 shadow-sm"
                    alt={testimonials[index].name}
                  />
                  <div>
                    <h4 className="font-black text-neutral-900 text-lg uppercase tracking-tight">
                      {testimonials[index].name}
                    </h4>
                    <p className="text-amber-600 text-xs font-black uppercase tracking-widest">
                      {testimonials[index].service}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-neutral-600 text-lg font-medium italic leading-relaxed">
                  "{testimonials[index].feedback}"
                </p>

                {/* Verification Sheet Segment */}
                <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">
                    Verified Lounge Member
                  </span>
                  <div className="flex gap-1">
                    {testimonials.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-6 bg-amber-500" : "w-2 bg-neutral-200"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Decorative Behind Glass Shadow Deck */}
          <div className="absolute w-full max-w-[450px] h-[350px] bg-neutral-100 rounded-[3rem] -z-10 translate-x-4 translate-y-4 rotate-3 opacity-40" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
