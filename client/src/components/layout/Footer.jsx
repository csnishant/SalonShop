import React from "react";
import { MapPin, PhoneCall, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Quick Links": [
      "About Us",
      "Our Doctors",
      "Before & After",
      "Contact Us",
      "Privacy Policy",
    ],
    Treatments: [
      "Facial Rejuvenation",
      "Body Contouring",
      "Hair Transplant",
      "CoolSculpting",
      "Laser Hair Removal",
    ],
  };

  const socialLinks = [
    { icon: <ExternalLink size={18} />, href: "#" },
    { icon: <ExternalLink size={18} />, href: "#" },
    { icon: <ExternalLink size={18} />, href: "#" },
  ];

  return (
    <footer className="bg-[#051916] text-slate-400 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h1 className="text-2xl font-black text-white">NEXUS</h1>
          <p className="text-sm text-slate-400 max-w-xs">
            A premier medical aesthetic center in Kuala Lumpur, delivering
            natural results through advanced technology.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-8 h-8 bg-white/5 rounded flex items-center justify-center hover:bg-emerald-500 transition-colors">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-white font-bold text-xs uppercase mb-4">
              {title}
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm hover:text-emerald-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-xs uppercase mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="text-emerald-500" size={18} /> LG, Wisma UOA
              II, Jalan Pinang, Kuala Lumpur
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall className="text-emerald-500" size={18} /> +60 123 456
              789
            </li>
            <li className="flex items-center gap-2">
              <Clock className="text-emerald-500" size={18} /> Mon - Sat: 9AM -
              6PM
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>© {currentYear} Nexus Clinic | Designed with Excellence</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Sitemap
          </a>
          <a href="#" className="hover:text-white">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
