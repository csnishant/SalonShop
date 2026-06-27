import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const reviewData = [
  {
    id: 1,
    name: "Amit Malviya",
    service: "Haircut & Styling",
    feedback:
      "Best salon in Burhanpur! The staff is very friendly and they cut my hair exactly how I wanted. Very clean and hygienic place.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Rohan Chaudhary",
    service: "Beard Grooming",
    feedback:
      "Great experience here. The hot towel massage after my beard trim was amazing. Definitely my go-to salon from now on.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Priya Rajput",
    service: "Bridal Makeup & Facial",
    feedback:
      "I did my bridal makeup here and it was perfect! The makeup looked very natural and stayed for a long time. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

// Circular trajectory variant configuration
const circularVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 260 : -260,
    y: 80,
    rotate: direction > 0 ? 25 : -25,
    opacity: 0,
    scale: 0.85,
  }),
  center: {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -260 : 260,
    y: 80,
    rotate: direction > 0 ? -25 : 25,
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  }),
};

const TestimonialSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const currentIndex = Math.abs(page % reviewData.length);

  const handleNext = () => {
    setPage([page + 1, 1]);
  };

  const handlePrev = () => {
    setPage([page - 1, -1]);
  };

  // Automatic infinite sliding setup
  useEffect(() => {
    if (isHovered) return;

    const sliderInterval = setInterval(() => {
      handleNext();
    }, 4500); // Transitions every 4.5 seconds

    return () => clearInterval(sliderInterval);
  }, [page, isHovered]);

  const activeReview = reviewData[currentIndex];

  return (
    <section className="py-20 bg-[#FBFBFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Content Headers */}
        <div className="space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 rounded-full border border-amber-100">
            <Star className="text-amber-500 fill-amber-500" size={14} />
            <span className="text-xs font-bold text-amber-800 tracking-wide">
              Top Rated Salon in Burhanpur
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-neutral-900 tracking-tight uppercase leading-none">
            What Our <br />
            <span className="text-amber-500">Guests Say.</span>
          </h2>

          <p className="text-neutral-500 text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
            Read real reviews from our happy customers. We love helping the
            people of Burhanpur look and feel their absolute best!
          </p>

          {/* Interactive Navigation Triggers */}
          <div className="flex justify-center lg:justify-start gap-4 pt-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-sm hover:border-amber-500 transition-all active:scale-95">
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-neutral-900 flex items-center justify-center text-white shadow-md hover:bg-amber-500 hover:text-black transition-all active:scale-95">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Column: Next-Level 3D Circular Animated Card */}
        <div
          className="relative h-[420px] sm:h-[460px] flex items-center justify-center px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <div className="relative w-full max-w-[440px] h-[340px] sm:h-[360px]">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout">
              <motion.div
                key={page}
                custom={direction}
                variants={circularVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full h-full bg-white rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] border border-neutral-100 flex flex-col justify-between">
                {/* Floating Brand Quote Icon */}
                <div className="absolute -top-5 left-6 w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-black shadow-md z-10">
                  <Quote fill="currentColor" size={16} />
                </div>

                <div className="space-y-4">
                  {/* Avatar & Meta Identity Grid */}
                  <div className="flex items-center gap-4 pt-2">
                    <img
                      src={activeReview.image}
                      className="w-14 h-14 rounded-xl object-cover border border-neutral-100 shadow-sm"
                      alt={activeReview.name}
                    />
                    <div>
                      <h4 className="font-bold text-neutral-900 text-base sm:text-lg">
                        {activeReview.name}
                      </h4>
                      <p className="text-amber-600 text-xs font-semibold">
                        {activeReview.service}
                      </p>
                    </div>
                  </div>

                  {/* 5-Star Assurance Index */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* High Clarity Review Quote */}
                  <p className="text-neutral-600 text-sm sm:text-base font-medium italic leading-relaxed">
                    "{activeReview.feedback}"
                  </p>
                </div>

                {/* Bottom Verification Deck & Timeline Progress Indicators */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-auto">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    Verified Customer
                  </span>
                  <div className="flex gap-1.5">
                    {reviewData.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setPage([i, i > currentIndex ? 1 : -1])}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === currentIndex
                            ? "w-5 bg-amber-500"
                            : "w-1.5 bg-neutral-200 hover:bg-neutral-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Underlay Perspective Baseline Effect */}
          <div className="absolute w-full max-w-[420px] h-[340px] bg-neutral-200/40 rounded-3xl -z-20 translate-y-6 scale-[0.96] blur-[2px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
