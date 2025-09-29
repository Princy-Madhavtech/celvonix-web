import React from "react";
import Hero from "../../images/cel2.png";
import { GiElectric } from "react-icons/gi";


const Header = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-start overflow-hidden">
      {/* Background Gradient from Bottom */}
      <div className="absolute inset-0 z-0">
        {/* Main bottom gradient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[60vh] bg-gradient-to-t from-[#64FF0A]/15 via-[#55E600]/8 to-transparent"></div>
        
        {/* Intense bottom center glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#64FF0A]/20 blur-[150px] rounded-full"></div>
        
        {/* Secondary softer glow */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#55E600]/15 blur-[120px] rounded-full"></div>
      </div>

      {/* Content on Top */}
      <div className="relative z-10 text-center max-w-3xl px-6 pt-20 md:pt-28">
        {/* Small Tagline */}
        <div className="inline-flex items-center bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-sm">
  Simplify your workflow 
  <GiElectric className="text-primary-100 ml-1" size={20}/>
</div>


        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Enhance your financial <br /> control with{" "}
          <span className="text-[#64FF0A]">CELVONIX</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg mb-8">
          Streamline your business's financial management with our intuitive,
          scalable SaaS platform. Designed for enterprises.
        </p>

        {/* CTA */}
        <button className="bg-primary-100 hover:bg-primary-100 text-black font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(100,255,10,0.5)]">
          Get Started
        </button>
      </div>

      {/* Image with enhanced glow */}
      <div className="relative w-full flex justify-center mt-12 pb-0 z-10">
        {/* Image container with glow effect */}
        <div className="relative">
          {/* Glow behind image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#64FF0A]/20 blur-[150px] rounded-full -z-10"></div>
          
          {/* Image */}
          <img
            src={Hero}
            alt="Dashboard Preview"
            className="h-[50vh] max-w-full rounded-t-3xl relative "
          />
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black to-transparent z-5"></div>
    </section>
  );
};

export default Header;