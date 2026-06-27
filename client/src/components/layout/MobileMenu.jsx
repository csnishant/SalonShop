import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, X } from "lucide-react"; // X आइकॉन को इंपोर्ट किया

const MobileMenu = ({ isOpen, setIsOpen, links, onNavigate }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"
            onClick={() => setIsOpen(false)}
          />

          {/* Premium Slim Drawer Body */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 bottom-0 bg-white text-black z-[1000] flex flex-col w-[280px] sm:w-[320px] h-[100dvh] shadow-2xl p-5 pt-20 border-l border-neutral-100">
            {/* --- SLIM CORNER CLOSE BUTTON --- */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black hover:bg-neutral-100 rounded-full transition-colors"
              aria-label="Close Menu">
              <X size={20} />
            </button>

            {/* Navigation Links Area */}
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[55vh] pr-1 scrollbar-none">
              <p className="text-[9px] font-black tracking-widest text-neutral-400 uppercase mb-2 pl-2">
                Our Specialties
              </p>
              {links.map((item) => (
                <a
                  key={item.name}
                  href="https://maps.app.goo.gl/8XSSKuy7e3T81v7n6"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-xl text-neutral-800 hover:bg-amber-500/10 active:bg-amber-500/10 transition-all font-bold text-sm group">
                  <span className="text-amber-500 p-2 bg-amber-500/10 rounded-lg group-hover:scale-105 transition-transform shrink-0">
                    {item.icon}
                  </span>
                  <span className="tracking-tight truncate">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Bottom Quick Actions Dashboard */}
            <div className="mt-auto border-t border-neutral-100 pt-5 space-y-5 bg-gradient-to-b from-transparent to-neutral-50/80 -mx-5 px-5 pb-5">
              <div>
                <span className="inline-flex items-center gap-1 text-amber-600 text-[9px] font-black tracking-widest uppercase mb-1">
                  <Phone size={9} /> Booking Helpline
                </span>
                <a
                  href="tel:+916268762390"
                  className="text-lg text-neutral-900 font-black tracking-tight hover:text-amber-600 transition-colors block">
                  +91 6268762390
                </a>
              </div>

              <div className="space-y-0.5">
                <span className="inline-flex items-center gap-1 text-neutral-400 text-[9px] font-black tracking-widest uppercase">
                  <MapPin size={9} /> Flagship Salon
                </span>
                <p className="text-[11px] text-neutral-600 leading-relaxed font-medium">
                  Indra Colony, Opp. Anand Green Restaurant, <br />
                  <span className="font-bold text-neutral-800">
                    Burhanpur (M.P.)
                  </span>
                </p>
              </div>

              <button
                onClick={(e) => onNavigate(e, "/book-appointment")}
                className="w-full bg-amber-500 text-black text-center py-3 rounded-xl font-black text-[11px] tracking-widest shadow-md active:scale-[0.98] transition-transform hover:bg-amber-400">
                SCHEDULE APPOINTMENT
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
