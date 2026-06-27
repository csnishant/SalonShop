import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Phone,
  CheckCircle,
  Sparkles,
  ChevronRight,
  MapPin,
  MessageSquare,
  Scissors,
  Heart,
  Smile,
} from "lucide-react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceCategory: "",
    date: "",
    timeSlot: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simple local-friendly service groupings
  const categories = [
    {
      id: "hair",
      name: "Haircut & Styling",
      desc: "Trending cuts, spa, color & beard grooming",
      icon: <Scissors className="w-5 h-5" />,
    },
    {
      id: "skin",
      name: "Facial & Skin Care",
      desc: "Cleanups, glow facials & detanning",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      id: "bridal",
      name: "Bridal & Groom Makeup",
      desc: "Special occasion & marriage packages",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      id: "combo",
      name: "All-in-One Combos",
      desc: "Best value packages for regular grooming",
      icon: <Smile className="w-5 h-5" />,
    },
  ];

  // Available simple time segments
  const timeSlots = [
    "10:30 AM - 12:00 PM (Morning)",
    "12:00 PM - 02:00 PM (Noon)",
    "02:00 PM - 04:00 PM (Afternoon)",
    "04:00 PM - 06:30 PM (Evening Rush)",
    "06:30 PM - 08:30 PM (Late Night)",
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategorySelect = (catName) => {
    setFormData({ ...formData, serviceCategory: catName });
    setTimeout(() => setStep(2), 300); // Dynamic automated progression
  };

  const handleTimeSelect = (slot) => {
    setFormData({ ...formData, timeSlot: slot });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.date ||
      !formData.timeSlot
    ) {
      alert("Please fill in your Name, Mobile Number, Date, and Time Slot.");
      return;
    }
    setIsSubmitted(true);
  };

  // Automated fallback message builder for instant local WhatsApp bookings
  const triggerWhatsAppBooking = () => {
    const message = `Hello Styloria! I want to confirm my booking:\n\n👤 Name: ${formData.name}\n📞 Mobile: ${formData.phone}\n✂️ Service: ${formData.serviceCategory}\n📅 Date: ${formData.date}\n⏰ Time: ${formData.timeSlot}\n📝 Note: ${formData.notes || "None"}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919755131359?text=${encoded}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-neutral-900 pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 font-extrabold text-[11px] tracking-widest px-4 py-1.5 rounded-full uppercase mb-4">
            <Sparkles size={14} className="animate-pulse text-amber-500" /> Fast
            & Simple Booking
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 uppercase">
            Book Your <span className="text-amber-500">Salon Slot</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-500 text-sm sm:text-base font-medium mt-3 max-w-xl mx-auto">
            No advance payment required. Just select your service, reserve your
            time, and enjoy a VIP premium treatment.
          </motion.p>
        </div>

        {/* ================= SUCCESS CONFIRMATION OVERLAY LAYER ================= */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-400 to-amber-600" />
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <CheckCircle size={36} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 uppercase tracking-tight">
                Appointment Requested!
              </h2>
              <p className="text-neutral-500 font-medium text-sm sm:text-base max-w-md mx-auto mt-2">
                Thank you,{" "}
                <span className="text-neutral-900 font-bold">
                  {formData.name}
                </span>
                . We have saved your seat for{" "}
                <span className="text-neutral-900 font-bold">
                  {formData.date}
                </span>{" "}
                during{" "}
                <span className="text-amber-600 font-bold">
                  {formData.timeSlot}
                </span>
                .
              </p>

              <div className="mt-8 p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl max-w-md mx-auto text-left space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Selected Segment:</span>{" "}
                  <span className="font-bold text-neutral-800">
                    {formData.serviceCategory}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Mobile Provided:</span>{" "}
                  <span className="font-bold text-neutral-800">
                    {formData.phone}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 pt-2 text-neutral-500 border-t border-neutral-200/60 mt-2">
                  <MapPin size={14} className="text-amber-500 shrink-0" />
                  <span>
                    Opp. Anand Green Restaurant, Indra Colony, Burhanpur
                  </span>
                </div>
              </div>

              {/* Instant Action CTA Row */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={triggerWhatsAppBooking}
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider px-6 py-4 rounded-xl shadow-xl transition-all active:scale-95 w-full sm:w-auto">
                  <MessageSquare size={16} /> Confirm via WhatsApp Now
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                    setFormData({
                      name: "",
                      phone: "",
                      serviceCategory: "",
                      date: "",
                      timeSlot: "",
                      notes: "",
                    });
                  }}
                  className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition-all w-full sm:w-auto">
                  Book Another Slot
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= MAIN INTERACTIVE BOOKING CONTAINER ================= */}
        {!isSubmitted && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT SIDE: STEP WORKFLOW PANEL */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-neutral-200/70 p-6 sm:p-8 shadow-sm space-y-8">
              {/* VISUAL NAVIGATION TABS FOR LOCAL UNDERSTANDING */}
              <div className="flex items-center gap-4 border-b border-neutral-100 pb-4 text-xs font-black tracking-wider uppercase">
                <button
                  onClick={() => setStep(1)}
                  className={`pb-2 border-b-2 transition-all ${step === 1 ? "border-amber-500 text-amber-600" : "border-transparent text-neutral-400"}`}>
                  1. Choose Service
                </button>
                <ChevronRight size={14} className="text-neutral-300" />
                <button
                  onClick={() => formData.serviceCategory && setStep(2)}
                  className={`pb-2 border-b-2 transition-all ${step === 2 ? "border-amber-500 text-amber-600" : "border-transparent text-neutral-400"} ${!formData.serviceCategory ? "opacity-40 cursor-not-allowed" : ""}`}>
                  2. Timing & Info
                </button>
              </div>

              {/* STEP 1: CHOOSE SERVICE CATEGORY */}
              {step === 1 && (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4">
                  <div>
                    <h2 className="text-lg font-black uppercase text-neutral-800">
                      What treatment do you need?
                    </h2>
                    <p className="text-neutral-400 text-xs font-medium">
                      Select a category below to continue
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {categories.map((cat) => (
                      <motion.div
                        variants={fadeIn}
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat.name)}
                        className={`p-4 rounded-2xl border-2 text-left cursor-pointer transition-all flex items-start gap-4 group ${
                          formData.serviceCategory === cat.name
                            ? "bg-amber-500/5 border-amber-500 shadow-md"
                            : "bg-neutral-50/50 border-neutral-200/70 hover:border-neutral-300 hover:bg-neutral-50"
                        }`}>
                        <div
                          className={`p-3 rounded-xl transition-colors ${
                            formData.serviceCategory === cat.name
                              ? "bg-amber-500 text-black"
                              : "bg-white border border-neutral-200 text-neutral-700 group-hover:text-amber-500"
                          }`}>
                          {cat.icon}
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="font-extrabold text-sm tracking-tight text-neutral-800 group-hover:text-amber-600 transition-colors">
                            {cat.name}
                          </h4>
                          <p className="text-neutral-400 text-[11px] leading-snug font-medium">
                            {cat.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: DETAILS, DATE & TIME */}
              {step === 2 && (
                <motion.form
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6">
                  {/* Personal Metadata Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-neutral-700 uppercase tracking-wide flex items-center gap-1.5">
                        <User size={13} className="text-amber-500" /> Your Full
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-amber-500 focus:bg-white text-sm font-medium transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-neutral-700 uppercase tracking-wide flex items-center gap-1.5">
                        <Phone size={13} className="text-amber-500" /> Mobile
                        Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 97551 XXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-amber-500 focus:bg-white text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                  {/* Date Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-neutral-700 uppercase tracking-wide flex items-center gap-1.5">
                      <Calendar size={13} className="text-amber-500" /> Choose
                      Booking Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full sm:w-auto px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-amber-500 focus:bg-white text-sm font-bold text-neutral-800 transition-all cursor-pointer"
                    />
                  </div>

                  {/* Visual Time Slot Grid */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-neutral-700 uppercase tracking-wide flex items-center gap-1.5">
                      <Clock size={13} className="text-amber-500" /> Preferred
                      Timing Slot
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <div
                          key={slot}
                          onClick={() => handleTimeSelect(slot)}
                          className={`px-4 py-3 rounded-xl text-xs font-bold border-2 cursor-pointer transition-all text-left ${
                            formData.timeSlot === slot
                              ? "bg-neutral-900 border-neutral-900 text-white shadow-md"
                              : "bg-neutral-50/70 border-neutral-200/60 text-neutral-700 hover:border-neutral-300"
                          }`}>
                          {slot}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Short Optional Note */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-neutral-700 uppercase tracking-wide">
                      Any Special Request?{" "}
                      <span className="text-neutral-400 font-normal">
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      name="notes"
                      placeholder="e.g. Hair spa with master stylist, skincare for sensitive skin..."
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-amber-500 focus:bg-white text-sm font-medium transition-all"
                    />
                  </div>

                  {/* Form Action CTAs */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-100">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-black uppercase text-neutral-400 hover:text-neutral-600 tracking-wider order-2 sm:order-1">
                      ← Change Category
                    </button>
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg hover:shadow-amber-500/10 active:scale-95 transition-all order-1 sm:order-2">
                      Confirm Appointment Slots
                    </button>
                  </div>
                </motion.form>
              )}
            </div>

            {/* RIGHT SIDE: SALON TRUST & SUMMARY SIDEBAR */}
            <div className="lg:col-span-4 space-y-4">
              {/* Dynamic Live Sticky Booking Status Card */}
              <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 text-white/5 pointer-events-none rotate-12">
                  <Sparkles size={140} />
                </div>

                <h3 className="text-xs font-black tracking-widest text-amber-400 uppercase mb-4">
                  Your Summary
                </h3>

                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-3">
                    <span className="text-[10px] text-neutral-400 block font-bold uppercase tracking-wider">
                      Selected Category
                    </span>
                    <span className="text-sm font-extrabold tracking-tight text-white/90">
                      {formData.serviceCategory || "Not selected yet"}
                    </span>
                  </div>

                  <div className="border-b border-white/10 pb-3">
                    <span className="text-[10px] text-neutral-400 block font-bold uppercase tracking-wider">
                      Date & Preferred Time
                    </span>
                    <span className="text-sm font-extrabold tracking-tight text-white/90 block">
                      {formData.date ? formData.date : "Date not picked"}
                    </span>
                    <span className="text-xs text-amber-400 font-bold mt-0.5 block">
                      {formData.timeSlot
                        ? formData.timeSlot
                        : "Time slot not picked"}
                    </span>
                  </div>

                  <div className="pt-2 text-left">
                    <span className="text-[9px] bg-white/10 text-white/80 px-2.5 py-1 rounded-full font-extrabold uppercase tracking-widest inline-block">
                      Pay Post-Service At Store
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant Assistance Help Node */}
              <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 space-y-3 shadow-sm text-left">
                <h4 className="text-xs font-black uppercase text-neutral-800 tracking-wide">
                  Need Instant Help?
                </h4>
                <p className="text-neutral-400 text-[11px] leading-relaxed font-medium">
                  Confused about packages or dates? Directly drop a text on
                  WhatsApp or call our support line.
                </p>
                <a
                  href="tel:+919755131359"
                  className="block text-center bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border border-neutral-200 font-extrabold text-[11px] uppercase tracking-wider py-2.5 rounded-xl transition-all">
                  Call +91 97551 31359
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
