import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineChevronDown } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { key: "home", label: "Home", accent: "gray", children: [] },
    {
      key: "pages",
      label: "Pages",
      accent: "gray",
      children: ["About Us", "Our Team", "Pricing", "Contact"],
    },
    {
      key: "services",
      label: "Services",
      accent: "gray",
      children: ["Web Development", "Mobile Apps", "Cloud", "UI/UX"],
    },
    {
      key: "projects",
      label: "Projects",
      accent: "purple",
      children: ["Case Studies", "Portfolio", "Testimonials"],
    },
    {
      key: "blogs",
      label: "Blogs",
      accent: "gray",
      children: ["Latest Posts", "Categories", "Tags"],
    },
  ];

  const toggleMobileSection = (key) => {
    setOpenMobileSection((prev) => (prev === key ? null : key));
  };

  return (
    <header className="w-full text-white relative z-50">
      {/* Top Bar - Dark Gray */}
      <div className="sm:px-6 py-2 text-xs sm:text-lg flex items-center" style={{backgroundColor: '#242529',height: '50px',}}>
        <div className="container">
        <div className=" flex justify-between items-center">
        <div className="flex items-center sm:space-x-6">
          <span className="hidden md:flex items-center space-x-2">
            <FiMapPin className="text-white-100" size={15}/>
            <span className="text-white-100">eong</span>
          </span>
          <span className="flex items-center space-x-1 sm:space-x-2">
            <FiMail className="text-white-100"  size={15} />
            <a href="mailto:info@celvonix.com" className="text-white-100 hover:text-primary-100 text-xs sm:text-sm">
              <span className="sm:hidden">info@celvonix.com</span>
              <span className="hidden sm:inline">info@celvonix.com</span>
            </a>
          </span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a href="#" className="hidden md:inline-flex text-white-100 hover:text-primary-100"><FaFacebookF size={15}/></a>
          <a href="#" className="hidden md:inline-flex text-white-100 hover:text-primary-100"><FaLinkedinIn size={15}/></a>
          <a href="#" className="hidden md:inline-flex text-white-100 hover:text-primary-100"><FaInstagram size={15}/></a>
          <a href="#" className="hidden md:inline-flex text-white-100 hover:text-primary-100"><FaYoutube size={15}/></a>
          <span className="flex items-center space-x-1 sm:space-x-2 ml-2 sm:ml-4 pl-5">
            <FiPhone className="text-white-100" />
            <span className="text-white-100 text-md sm:text-sm">
              <span className="sm:hidden">(123) 456-7890</span>
              <span className="hidden sm:inline">(123) 456-7890</span>
            </span>
          </span>

        </div>
        </div>
        </div>
      </div>

      {/* Main Navbar - Black Background */}
      <div className="sm:px-6 py-3" style={{backgroundColor: '#000000',}}>
        <div className="container">
          <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {/* Logo image */}
          <a href="/" className="flex items-center">
            <img src="/assets/logo.png" alt="Celvonix" className="h-8 sm:h-10 w-auto" />
          </a>
        </div>

        {/* Desktop/Tablet Menu */}
        <nav className="hidden md:flex items-center space-x-6 xl:space-x-8 text-sm font-medium">
          {menuItems.map((item) => (
            <div key={item.key} className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-primary-100">
                <span>{item.label}</span>
                <HiOutlineChevronDown className={`text-xs ${item.accent === "purple" ? "text-purple-400" : "text-gray-400"}`} />
              </button>

              {item.children && item.children.length > 0 && (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 mt-3 w-48 bg-gray-900 border border-gray-800 rounded shadow-lg z-50">
                  <ul className="py-2">
                    {item.children.map((sub) => (
                      <li key={sub}>
                        <a href="#" className="block px-4 py-2 text-gray-300 hover:text-primary-100 hover:bg-gray-800">
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Search + Button */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <FiSearch className="text-lg text-gray-300 cursor-pointer hover:text-primary-100" />
          <button className="bg-primary-100 text-black font-semibold px-4 lg:px-5 py-2 rounded hover:bg-primary-300 flex items-center space-x-1 text-sm">
            <span>Get a quote</span>
            <span className="text-sm">↗</span>
          </button>
        </div>

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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full z-40 border-t" style={{backgroundColor: '#000000',}}>
          <nav className="container">
            {menuItems.map((item) => (
              <div key={item.key} className="border-b border-gray-300 border-opacity-30">
                <button
                  onClick={() => toggleMobileSection(item.key)}
                  className="w-full flex items-center justify-between text-gray-300 hover:text-primary-100 py-3"
                >
                  <span>{item.label}</span>
                  <HiOutlineChevronDown className={`text-xs ${item.accent === "purple" ? "text-purple-400" : "text-gray-400"} transform transition-transform ${openMobileSection === item.key ? "rotate-180" : "rotate-0"}`} />
                </button>
                {item.children && item.children.length > 0 && openMobileSection === item.key && (
                  <ul className="pl-4 pb-3 space-y-2">
                    {item.children.map((sub) => (
                      <li key={sub}>
                        <a href="#" className="block text-gray-400 hover:text-primary-100 hover:bg-gray-900 py-1.5">
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="pt-4 pb-4">
              <button className="w-full bg-primary-100 text-black font-semibold px-5 py-3 rounded hover:bg-primary-300 flex items-center justify-center space-x-1">
                <span>Get a quote</span>
                <span className="text-sm">↗</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;