import React from "react";
import AboutImg from "../../images/cel1.png";
import BgLogo from "../../images/bgLogo.png";

const AboutSection = () => {
  return (
    <section className="relative text-white py-24 px-6 lg:px-20 overflow-hidden">
    {/* <section className="relative bg-gradient-to-b from-[#1b1c20] to-[#151515] text-white py-24 px-6 lg:px-20 overflow-hidden"> */}
      {/* Background Logo / abstract shapes */}
      <img
        src={BgLogo}
        alt="background logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] opacity-5 -z-10"
      />
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary-100/20 blur-3xl animate-pulse-slow -z-10"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-primary-100/10 blur-3xl animate-pulse-slow -z-10"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full h-[500px] group perspective">
            {/* Grey frame layers (more depth layers) */}
            <div className="absolute top-6 left-6 w-full h-full rounded-[2.5rem] bg-gray-800/20 transform rotate-2 transition-transform duration-700 group-hover:-rotate-3 group-hover:-translate-x-2"></div>
            <div className="absolute top-4 left-4 w-full h-full rounded-[2.5rem] bg-gray-700/20 transform rotate-1 transition-transform duration-700 group-hover:-rotate-2 group-hover:-translate-x-1"></div>
            <div className="absolute top-2 left-2 w-full h-full rounded-[2.5rem] bg-gray-600/20 transform rotate-0 transition-transform duration-700 group-hover:-rotate-1 group-hover:-translate-x-1"></div>

            {/* Main image with opposite hover bend */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden transform transition-transform duration-700 group-hover:rotate-3 group-hover:translate-x-2 shadow-[0_0_60px_#64FF0A50] group-hover:shadow-[0_0_100px_#64FF0A70]">
              <img
                src={AboutImg}
                alt="About"
                className="w-full h-full object-cover rounded-[2.5rem] transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Mini logo + heading */}
          {/* <div className="flex items-center gap-3">
            <img src={BgLogo} alt="mini logo" className="w-6 h-6" />
            <p className="uppercase text-sm tracking-widest text-primary-100 font-semibold">
              About Celvonix
            </p>
          </div> */}

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-snug">
            Empowering the World with
            <span className="text-primary-100"> Renewable Energy</span>
          </h2>

          {/* Description */}
          <p className="text-text_color-100 leading-relaxed max-w-xl">
            We are passionate about shaping the future of energy by providing
            clean, efficient, and innovative solutions. As a leader in solar
            power & renewable energy, we strive to make the world a better place
            for everyone.
          </p>

          {/* Modern Highlights */}
          <div className="flex flex-wrap gap-6">
            {[
              "Clean Energy Innovation",
              "Sustainable Future",
              "Smart Solar Systems",
              "Cutting-edge Technology",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-[#222222] bg-opacity-40 px-4 py-2 rounded-xl backdrop-blur-md hover:translate-y-[-4px] transition-transform duration-300 shadow-md hover:shadow-lg"
              >
                <div className="w-3 h-3 rounded-full bg-primary-100 animate-pulse"></div>
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <a
            href="/about"
            className="inline-flex items-center gap-3 text-primary-100 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl "
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
