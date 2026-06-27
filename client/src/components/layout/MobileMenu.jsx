import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

const MobileMenu = ({ isOpen, setIsOpen, links, onNavigate }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Full Screen Backdrop with Stronger Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[2000]"
            onClick={() => setIsOpen(false)}
          />

          {/* Full Screen Premium Drawer Body */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white text-black z-[2001] flex flex-col w-full h-[100dvh] p-6 pt-24">
            {/* NOTE: पुराना absolute क्लोज़ बटन यहाँ से हटा दिया गया है */}

            {/* Navigation Links Area */}
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[60vh] pr-1 mt-4 scrollbar-none">
              <p className="text-[10px] font-black tracking-[0.2em] text-neutral-400 uppercase mb-2 pl-2">
                Our Specialties
              </p>
              {links.map((item) => (
                <a
                  key={item.name}
                  href="https://maps.app.goo.gl/8XSSKuy7e3T81v7n6"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-3 rounded-2xl text-neutral-800 hover:bg-amber-500/10 active:bg-amber-500/10 transition-all font-black text-base group">
                  <span className="text-amber-500 p-2.5 bg-amber-500/10 rounded-xl group-hover:scale-105 transition-transform shrink-0">
                    {item.icon}
                  </span>
                  <span className="tracking-tight truncate">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Bottom Quick Actions Dashboard */}
            <div className="mt-auto border-t border-neutral-100 pt-6 space-y-6 bg-gradient-to-b from-transparent to-neutral-50/80 -mx-6 px-6 pb-6">
              <div className="flex justify-between items-end">
                <div>
                  <span className="inline-flex items-center gap-1 text-amber-600 text-[10px] font-black tracking-widest uppercase mb-1">
                    <Phone size={10} /> Booking Helpline
                  </span>
                  <a
                    href="tel:+916268762390"
                    className="text-xl text-neutral-900 font-black tracking-tight hover:text-amber-600 transition-colors block">
                    +91 6268762390
                  </a>
                </div>

                <div className="text-right space-y-0.5">
                  <span className="inline-flex items-center gap-1 text-neutral-400 text-[10px] font-black tracking-widest uppercase">
                    <MapPin size={10} /> Flagship Salon
                  </span>
                  <p className="text-xs text-neutral-600 leading-tight font-medium">
                    Indra Colony, Burhanpur{" "}
                    <span className="font-bold text-neutral-800">(M.P.)</span>
                  </p>
                </div>
              </div>

              <button
                onClick={(e) => onNavigate(e, "/book-appointment")}
                className="w-full bg-amber-500 text-black text-center py-4 rounded-xl font-black text-xs tracking-widest shadow-xl active:scale-[0.98] transition-all hover:bg-amber-400">
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
