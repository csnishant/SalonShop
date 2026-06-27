import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Quick Links": [
      "About Us",
      "Our Services",
      "Our Team",
      "Book Appointment",
      "Privacy Policy",
    ],
    "Our Services": [
      "Haircut & Styling",
      "Beard Grooming",
      "Facial & Clean Up",
      "Hair Spa & Care",
      "Bridal & Groom Makeup",
    ],
  };

  const socialLinks = [
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Youtube size={18} />, href: "#" },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-16 pb-8 font-sans border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <h1 className="text-2xl font-black text-white tracking-wider">
            STYLORIA<span className="text-amber-500">.</span>
          </h1>
          <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
            The family salon in Burhanpur. We offer premium hair, beard, skin,
            and makeup services at friendly prices.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-9 h-9 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-300 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-200">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic Navigation Map Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              {title}
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm hover:text-amber-500 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Info Corner */}
        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
            Find Our Salon
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 leading-relaxed">
              <MapPin className="text-amber-500 shrink-0 mt-0.5" size={18} />
              <span>Main Road, Near Market Square, Burhanpur, MP</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-amber-500 shrink-0" size={18} />
              <span>+91 53532 55325</span>
            </li>
            <li className="flex items-start gap-3 leading-relaxed">
              <Clock className="text-amber-500 shrink-0 mt-0.5" size={18} />
              <span>Open Daily: 9:00 AM - 9:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Baseline Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
        <p>© {currentYear} Styloria Unisex Salon. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-neutral-400 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-neutral-400 transition-colors">
            Sitemap
          </a>
          <a href="#" className="hover:text-neutral-400 transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
