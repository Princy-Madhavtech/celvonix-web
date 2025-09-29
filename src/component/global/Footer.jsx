import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.png";
import BgImage from "../../images/footer3.png";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter new logo)

const Footer = () => {
  const menuItems = [
    { key: "", label: "Home" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact Us" },
    { key: "industries", label: "Industries" },
  ];

  const industriesItems = [
    { key: "storage", label: "Electric Storage" },
    { key: "vehicle", label: "Electric Vehicle" },
    { key: "device", label: "Electric Device" },
  ];

  return (
    <footer
      className="relative text-white overflow-hidden py-16 px-6 lg:px-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 -z-10"></div>

      {/* Top gradient shadow (outside background) */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/60 to-transparent -z-10"></div>

      {/* Inner top shade */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 via-black/40 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left side: Company info */}
          <div className="space-y-4 max-w-md">
            <h3 className="text-lg font-semibold">
              Par Solution <span className="text-primary-100">India</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              802-810, 8th Floor, APMC Market, Krushi Bazaar, Near, Ring Rd,
              beside North Extension, Sahara Darwaja, Begampura, Surat, Gujarat
              395003
            </p>
          </div>

          {/* Right side: Career + Business Inquiry */}
          <div className="space-y-4 text-sm text-gray-300">
            <div>
              <span className="font-semibold">For career:</span>{" "}
              <NavLink
                to="mailto:hr@parsolution.net"
                className="hover:text-primary-100 transition"
              >
                hr@parsolution.net
              </NavLink>
            </div>
            <div>
              <span className="font-semibold">Business inquiry:</span>{" "}
              <NavLink
                to="mailto:connect@parsolution.net"
                className="hover:text-primary-100 transition"
              >
                connect@parsolution.net
              </NavLink>
            </div>
          </div>
        </div>

        {/* Middle row */}
        <div className="flex items-center justify-between pt-4">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            {menuItems.map((item) =>
              item.key === "industries" ? (
                <div key={item.key} className="relative group">
                  <span className="text-gray-300 font-semibold group-hover:text-primary-100 cursor-default">
                    {item.label}
                  </span>
                  <div className="absolute top-full left-0 mt-2 w-40 rounded-lg bg-black/50 backdrop-blur-md border border-white/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {industriesItems.map((sub) => (
                        <NavLink
                          key={sub.key}
                          to={`/industries/${sub.key}`}
                          className="block px-4 py-2 text-gray-200 hover:text-primary-100 hover:bg-white/10"
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.key}
                  to={`/${item.key}`}
                  className="hover:text-primary-100 transition"
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left bottom: Logo + Copyright */}
          <div className="flex flex-col items-center lg:items-start gap-3 text-sm text-gray-300">
            <span>Copyright © 2025 Par Solution. All Rights Reserved</span>
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-4">
            <NavLink
              to="https://linkedin.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary-100 hover:text-black transition"
            >
              <FaLinkedin size={18} />
            </NavLink>
            <NavLink
              to="https://twitter.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary-100 hover:text-black transition"
            >
              <FaXTwitter size={18} />
            </NavLink>
            <NavLink
              to="https://youtube.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary-100 hover:text-black transition"
            >
              <FaYoutube size={18} />
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
