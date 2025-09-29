import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.png";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // ✅ Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { key: "", label: "Home" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact Us" },
    // { key: "jobs", label: "Job Hiring" },
    { key: "industries", label: "Industries" },
  ];

  const industriesItems = [
    { key: "storage", label: "Electric Storage" },
    { key: "vehicle", label: "Electric Vehicle" },
    { key: "device", label: "Electric Device" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md border-b border-white/30 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="sm:px-6 py-3">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img src={Logo} alt="Celvonix" className="h-8 sm:h-10 w-auto" />
            </NavLink>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-6 xl:space-x-8 text-sm font-medium relative">
  {menuItems.map((item) =>
    item.key === "industries" ? (
      <div key={item.key} className="relative group cursor-default">
        {/* Disabled parent link */}
        <span
          className="text-gray-300 font-semibold group-hover:text-primary-100"
        >
          {item.label}
        </span>

        {/* Dropdown Menu */}
        <div className="absolute right-2 mt-2 w-40 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          {industriesItems.map((sub) => (
            <NavLink
              key={sub.key}
              to={`/industries/${sub.key}`}
              className="block mx-4 py-4 text-gray-200 hover:text-primary-100 border-b border-white/20 last:border-none"
            >
              {sub.label}
            </NavLink>
          ))}
        </div>
      </div>
    ) : (
      <NavLink
        key={item.key}
        to={`/${item.key}`}
        className={({ isActive }) =>
          isActive
            ? "text-primary-100 font-semibold"
            : "text-gray-300 hover:text-primary-100"
        }
      >
        {item.label}
      </NavLink>
    )
  )}
</nav>


            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <FiSearch className="text-lg text-gray-300 cursor-pointer hover:text-primary-100" />
              <button
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-primary-100 p-1"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full z-40 border-t bg-black">
          <nav className="container">
            {menuItems.map((item) => (
              <div
                key={item.key}
                className="border-b border-gray-300 border-opacity-30"
              >
                <NavLink
                  to={`/${item.key}`}
                  className={({ isActive }) =>
                    `block py-3 ${
                      isActive
                        ? "text-primary-100 font-semibold"
                        : "text-gray-300 hover:text-primary-100"
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
