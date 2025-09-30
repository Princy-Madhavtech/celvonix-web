import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactCard = () => {
  return (
    <section className="w-full flex justify-center py-16 px-4">
      <div className="relative w-full max-w-7xl flex justify-center">
        {/* Accent layers */}
        <div className="absolute top-6 left-6 w-full h-full rounded-3xl bg-gray-800/20 transform rotate-2"></div>
        <div className="absolute top-4 left-4 w-full h-full rounded-3xl bg-gray-700/20 transform rotate-1"></div>
        <div className="absolute top-2 left-2 w-full h-full rounded-3xl bg-gray-600/20 transform rotate-0"></div>

        {/* Main Glass Card */}
        <div
          className="group relative w-full rounded-3xl overflow-hidden shadow-xl bg-black/20 backdrop-blur-xl border border-white/20 p-8 md:p-12 
          flex flex-col md:flex-row items-center justify-between gap-8 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary-100/20"
        >
          {/* Subtle gradient sheen */}
          <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(1200px_500px_at_100%_0%,rgba(255,255,255,0.15),transparent_60%)]"></div>

          {/* Left text */}
          <div className="relative max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-100"></span>
              Have a project in mind?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">Get In Touch</h2>
            <p className="text-white/85 text-base leading-relaxed">
              Tell us what you’re looking for and turn your{" "}
              <span className="text-primary-100 font-semibold">innovative ideas</span>{" "}
              into real products.
            </p>
            <p className="mt-3 text-sm text-white/70">We typically respond within 1 business day.</p>
          </div>

          {/* Right side button */}
          <div className="relative">
            <NavLink
              to="/contact"
              className="relative inline-flex items-center gap-2 rounded-xl bg-primary-100 px-7 py-3.5 font-semibold text-black shadow-lg shadow-primary-100/20 transition-all duration-200 hover:shadow-primary-100/30"
            >
              <span>Contact Us</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                <FaArrowRightLong size={20} />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
