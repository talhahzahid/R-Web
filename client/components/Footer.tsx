import React from 'react';
import { Gem } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#E9E7E2] text-[#1C2D37] pt-16 pb-8 px-6 md:px-16 border-t border-gray-200/50 relative">

        {/* Section 1: Main Content Links */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-12">

          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-serif tracking-wide text-[#1C2D37]">
              Heritage Press
            </h2>
            <p className="text-sm text-[#4A4A4A] max-w-sm leading-relaxed font-light">
              Crafting enduring legacies through the art of fine printing since 1895.
            </p>
          </div>

          {/* The Atelier Links Column */}
          <div className="flex flex-col space-y-4 md:pl-12">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#1C2D37]">
              The Atelier
            </h3>
            <ul className="flex flex-col space-y-3 text-sm text-[#4A4A4A]">
              <li><a href="#" className="hover:text-black hover:underline underline-offset-4 transition-all">Archives</a></li>
              <li><a href="#" className="hover:text-black hover:underline underline-offset-4 transition-all">Techniques</a></li>
              <li><a href="#" className="hover:text-black hover:underline underline-offset-4 transition-all">Paper Catalog</a></li>
              <li><a href="#" className="hover:text-black hover:underline underline-offset-4 transition-all">Our Story</a></li>
            </ul>
          </div>

          {/* Connect Links Column */}
          <div className="flex flex-col space-y-4 md:pl-12">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#1C2D37]">
              Connect
            </h3>
            <ul className="flex flex-col space-y-3 text-sm text-[#4A4A4A]">
              <li><a href="#" className="hover:text-black hover:underline underline-offset-4 transition-all">Contact</a></li>
              <li><a href="#" className="hover:text-black hover:underline underline-offset-4 transition-all">Privacy</a></li>
              <li><a href="#" className="hover:text-black hover:underline underline-offset-4 transition-all">Instagram</a></li>
              <li><a href="#" className="hover:text-black hover:underline underline-offset-4 transition-all">Inquiry</a></li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="max-w-7xl mx-auto border-t border-[#CACEC7]/60 my-6"></div>

        {/* Section 2: Copyright & Brand Elements */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-xs text-[#4A4A4A]/80 tracking-wide text-center sm:text-left">
            &copy; {new Date().getFullYear()} Heritage Press. All Rights Reserved.
          </p>

          {/* Diamond Decorative Icons */}
          <div className="flex items-center space-x-2 text-[#8B7355]/70">
            <Gem size={14} strokeWidth={1.5} />
            <Gem size={14} strokeWidth={1.5} />
            <Gem size={14} strokeWidth={1.5} />
          </div>
        </div>
      </footer>

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center group pointer-events-auto">
        {/* Glow pulsing effect backdrop */}
        <span className="absolute w-14 h-14 bg-[#25D366] rounded-full opacity-25 animate-ping group-hover:opacity-40 transition-opacity"></span>

        {/* Active clickable link anchor tag */}
        <a
          href="https://wa.me/923268953801" // Change to your actual business layout phone number string
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 flex items-center justify-center group-active:scale-95"
        >
          {/* Custom vector inline SVG for proper high-res icon rendering without extra third-party asset packs */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-6 h-6 fill-current"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Footer;