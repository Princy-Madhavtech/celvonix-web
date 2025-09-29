import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactCard = () => {
  return (
    <section className="w-full flex justify-center py-12 px-4">
      <div className="relative w-full max-w-7xl flex justify-center">
        {/* Grey frame layers like AboutSection */}
        <div className="absolute top-6 left-6 w-full h-full rounded-2xl bg-gray-800/20 transform rotate-2"></div>
        <div className="absolute top-4 left-4 w-full h-full rounded-2xl bg-gray-700/20 transform rotate-1"></div>
        <div className="absolute top-2 left-2 w-full h-full rounded-2xl bg-gray-600/20 transform rotate-0"></div>

        {/* Main Glass Card */}
        <div
          className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-black/10 backdrop-blur-lg border border-white/30 p-10 
          flex flex-col md:flex-row items-center justify-between gap-6 text-white transition-transform duration-500 hover:scale-[1.02]"
        >
          {/* Left text */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-200 text-base leading-relaxed">
              Get in touch to let us know what you’re looking for and make your{" "}
              <span className="text-primary-100 font-semibold">
                innovative ideas
              </span>{" "}
              a real product.
            </p>
          </div>

          {/* Right side button */}
          <div>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-100 hover:opacity-90 text-black font-medium px-6 py-3 rounded-lg transition"
            >
              Contact Us <FaArrowRightLong size={20} />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
