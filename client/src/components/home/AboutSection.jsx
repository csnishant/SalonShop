import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import {
  Check,
  ChevronRight,
  Clock3,
  ShieldCheck,
  Sparkles,
  Scissors,
} from "lucide-react";

// Counter Component for Eye-Catching Stats
const Counter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    const controls = animate(count, parseInt(value), {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
};

const AboutSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const stats = [
    {
      label: "Happy Clients",
      value: "8000",
      suffix: "+",
      icon: <Sparkles className="text-amber-500" />,
    },
    {
      label: "Years Experience",
      value: "10",
      suffix: "+ Yrs",
      icon: <Clock3 className="text-orange-500" />,
    },
    {
      label: "Premium Products",
      value: "100",
      suffix: "%",
      icon: <ShieldCheck className="text-blue-500" />,
    },
    {
      label: "Master Stylists",
      value: "12",
      suffix: "+",
      icon: <Scissors className="text-emerald-500" />,
    },
  ];

  const features = [
    {
      title: "Master Barber Engineering",
      desc: "Every fade and beard lineup is executed with structural precision. Our highly trained stylists tailor your haircut according to your unique facial geometry.",
    },
    {
      title: "Luxury Hygiene Protocols",
      desc: "100% sanitized tools, single-use fresh towels, and premium imported product lines. We prioritize immaculate grooming safety and cleanliness.",
    },
    {
      title: "Bespoke Grooming Journeys",
      desc: "No rushed services here. Enjoy an uninterrupted detailed consultation along with our signature relaxing hot towel treatment included in premium sessions.",
    },
  ];

  return (
    <section className="py-24 bg-[#f9f9fb] relative overflow-hidden">
      {/* Premium Light Mode Liquid Ambient Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neutral-200/50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-amber-600 font-black tracking-[0.3em] uppercase text-[10px] mb-4">
            The Handsome Hunk Philosophy
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tight leading-[0.9]">
            More Than A Haircut. <br />
            <span className="text-neutral-400">An Elite Experience.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Bento Large Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 relative group">
            <div className="h-full min-h-[500px] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Handsome Hunk Luxury Grooming Studio"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent" />

              {/* Floating iOS Glassmorphic Panel over Cover Media */}
              <div className="absolute bottom-10 left-10 right-10 bg-white/40 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/40 flex items-center justify-between shadow-lg">
                <div>
                  <p className="text-neutral-900 font-black text-lg">
                    Premium Men's Lounge
                  </p>
                  <p className="text-neutral-700 font-medium text-xs">
                    Hoshangabad's Prime Lifestyle Destination
                  </p>
                </div>
                <div className="bg-amber-500 p-3 rounded-full text-black shadow-md">
                  <Check strokeWidth={4} size={20} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive Architecture Selector & Stats Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Top Interactive Feature Panel Accordion Layout */}
            <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-4 border border-white shadow-md space-y-2">
              {features.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`w-full p-6 rounded-2xl text-left transition-all duration-500 ${
                    activeFeature === i
                      ? "bg-white shadow-md scale-[1.01] border border-neutral-100"
                      : "hover:bg-white/40"
                  }`}>
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-black text-sm tracking-tight ${
                        activeFeature === i
                          ? "text-amber-600"
                          : "text-neutral-500"
                      }`}>
                      {f.title}
                    </span>
                    <ChevronRight
                      size={18}
                      className={`transition-transform duration-300 ${
                        activeFeature === i
                          ? "rotate-90 text-amber-600"
                          : "text-neutral-300"
                      }`}
                    />
                  </div>
                  <AnimatePresence initial={false}>
                    {activeFeature === i && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-xs text-neutral-500 mt-2 leading-relaxed font-medium">
                        {f.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            {/* Bottom: Metrics Bento Style Blocks Layout */}
            <div className="grid grid-cols-2 gap-4 flex-grow">
              {stats.map((s, i) => (
                <motion.div
                  whileHover={{ y: -4 }}
                  key={i}
                  className="bg-white rounded-[2rem] p-6 shadow-sm border border-neutral-100 flex flex-col justify-between transition-all">
                  <div className="w-10 h-10 bg-neutral-50 rounded-xl flex items-center justify-center mb-4 border border-neutral-100">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-neutral-900 leading-none tracking-tight">
                      <Counter value={s.value} suffix={s.suffix} />
                    </h3>
                    <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400 mt-2">
                      {s.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
