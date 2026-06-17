import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Scissors,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuData = {
    "Hair Styling": [
      {
        title: "Signature Haircuts",
        desc: "Advanced styling",
        icon: <Scissors size={18} />,
      },
      {
        title: "Luxury Hair Spa",
        desc: "Deep nourishment",
        icon: <Sparkles size={18} />,
      },
    ],
    Grooming: [
      {
        title: "Beard Architecture",
        desc: "Hot towel shaves",
        icon: <Scissors size={18} />,
      },
      {
        title: "Elite Facials",
        desc: "Skin brightening",
        icon: <Sparkles size={18} />,
      },
    ],
  };

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Our Stylists", path: "/stylists" },
    { name: "About Lounge", path: "/about" },
  ];

  return (
    // ध्यान दें: यहाँ से fixed top-0 left-0 हटा दिया गया है
    <nav
      className={`fixed  w-full z-[9999] border-b border-white/5 shadow-2xl transition-all duration-300 ${
        mobileMenuOpen
          ? "py-6 bg-[#0a0a0a]"
          : isScrolled
            ? "py-4 bg-[#0a0a0a]/95 backdrop-blur-md"
            : "py-6 bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo Identity */}
        <a href="/" className="flex flex-col group relative z-[1001]">
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white group-hover:text-amber-400 transition-colors">
            HANDSOME HUNK
          </span>
          <span className="text-[9px] tracking-[0.45em] text-amber-500 font-bold uppercase ml-0.5">
            Luxury Salon & Lounge
          </span>
        </a>

        {/* Desktop Interface Navigation */}
        <div className="hidden lg:flex items-center gap-3 bg-white/5 p-1.5 rounded-full border border-white/10">
          {Object.keys(menuData).map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => setActiveMenu(item)}
              onMouseLeave={() => setActiveMenu(null)}>
              <button
                className={`px-5 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2 transition-all ${
                  activeMenu === item
                    ? "bg-amber-500 text-black"
                    : "text-amber-50/80 hover:text-white"
                }`}>
                {item}{" "}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${activeMenu === item ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {activeMenu === item && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 pt-4 w-80">
                    <div className="bg-[#121212] rounded-3xl p-3 shadow-2xl border border-white/10">
                      {menuData[item].map((sub) => (
                        <a
                          key={sub.title}
                          href="#"
                          className="flex items-center p-3 rounded-2xl hover:bg-amber-500/10 group/item transition-all">
                          <div className="w-10 h-10 rounded-xl bg-white/5 text-amber-400 flex items-center justify-center mr-3 group-hover/item:bg-amber-500 group-hover/item:text-black transition-all">
                            {sub.icon}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white group-hover/item:text-amber-400 transition-colors">
                              {sub.title}
                            </p>
                            <p className="text-[10px] text-neutral-400">
                              {sub.desc}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="px-5 py-2.5 rounded-full text-[13px] font-bold text-amber-50/80 hover:text-white transition-all">
              {link.name}
            </a>
          ))}
        </div>

        {/* Call To Action Interactivity Group */}
        <div className="flex items-center gap-4 relative z-[1001]">
          <button className="hidden md:flex text-white font-bold text-xs tracking-widest hover:text-amber-400 transition-colors">
            <ShoppingBag size={20} />
          </button>
          <button className="bg-amber-500 text-black px-7 py-3 rounded-full text-[11px] font-black tracking-widest shadow-lg hover:bg-amber-400 active:scale-95 transition-all">
            BOOK NOW
          </button>
          <button
            className="lg:hidden text-white hover:text-amber-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel System */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#0a0a0a] z-[1000] flex flex-col p-8 pt-44 h-screen w-screen overflow-y-auto">
            <div className="flex flex-col gap-6">
              {["Hair Styling", "Grooming", "Products", "Stylists"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl sm:text-5xl font-black text-neutral-400 hover:text-amber-400 transition-colors">
                    {item}.
                  </a>
                ),
              )}
            </div>
            <div className="mt-auto border-t border-white/5 pt-8">
              <p className="text-amber-500 text-xs font-bold mb-2 tracking-widest">
                LOUNGE CALL & APPOINTMENTS
              </p>
              <h3 className="text-2xl text-white font-black tracking-wide">
                +91 98765 43210
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
