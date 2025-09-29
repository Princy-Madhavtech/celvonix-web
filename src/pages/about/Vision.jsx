import React from "react";
import Service1 from "../../images/11.png";
import Service2 from "../../images/service2.png";
import Service3 from "../../images/service3.png";
import Service4 from "../../images/22.png";
import BgImage from "../../images/cel2.png";
import MiniLogo from "../../images/bgLogo.png";

const Vision = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 lg:px-20 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 relative z-10">
        {/* Left Side (1/3 width) */}
        <div className="w-full lg:w-1/3 relative flex items-center justify-center">
          <img
            src={BgImage}
            alt="background"
            className="w-full h-full object-cover rounded-2xl opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-10 left-10">
            <div className="flex items-center gap-3 mb-4">
              <img src={MiniLogo} alt="mini logo" className="w-7 h-7" />
              <p className="uppercase text-sm tracking-wider text-[#7CFF01] font-semibold">
                Our Approach
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-snug max-w-sm">
              Powering the Future with{" "}
              <span className="bg-gradient-to-r from-[#7CFF01] to-green-400 bg-clip-text text-transparent">
                CELVONIX
              </span>
            </h2>
          </div>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-2 gap-6">
  {/* Row 1 - Left Half (Vision card) */}
  <div className="col-span-1">
    <div className="p-6 h-full rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#7CFF01]/60 transition-all hover:scale-105 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7CFF01]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <h3 className="text-xl font-semibold mb-3 text-[#7CFF01]">Our Vision</h3>
      <p className="text-gray-300 leading-relaxed text-sm">
        At CELVONIX we envision a future where energy is limitless,
        sustainable & accessible to all.
      </p>
    </div>
  </div>

  {/* Row 1 - Right Half (2 images side by side) */}
  <div className="col-span-1 grid grid-cols-2 gap-6">
    <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 bg-white/5 hover:scale-105 transition-transform">
      <img src={Service4} alt="service4" className="w-full h-full object-cover" />
    </div>
    <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 bg-white/5 hover:scale-105 transition-transform">
      <img src={Service1} alt="service1" className="w-full h-full object-cover" />
    </div>
  </div>

  {/* Row 2 - Left Half (2 images side by side) */}
  <div className="col-span-1 grid grid-cols-2 gap-6">
    <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 bg-white/5 hover:scale-105 transition-transform">
      <img src={Service2} alt="service2" className="w-full h-full object-cover" />
    </div>
    <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 bg-white/5 hover:scale-105 transition-transform">
      <img src={Service3} alt="service3" className="w-full h-full object-cover" />
    </div>
  </div>

  {/* Row 2 - Right Half (Mission card) */}
  <div className="col-span-1">
    <div className="p-6 h-full rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#7CFF01]/60 transition-all hover:scale-105 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7CFF01]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <h3 className="text-xl font-semibold mb-3 text-[#7CFF01]">Our Mission</h3>
      <p className="text-gray-300 leading-relaxed text-sm">
        Redefining how energy is produced, distributed & consumed
        through innovative, eco-friendly solutions.
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Vision;
