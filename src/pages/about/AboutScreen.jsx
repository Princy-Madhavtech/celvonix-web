import React from "react";
import Img1 from "../../images/11.png";
import Img2 from "../../images/service2.png";
import Img3 from "../../images/service3.png";
import Img4 from "../../images/faq.png";

const images = [Img1, Img2, Img3, Img4];

const AboutScreen = () => {
  return (
    <section className="bg-primary-200 text-white py-24 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side Content */}
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold leading-snug">
            Search Our <span className="text-primary-100">Joblist</span>
          </h2>
          <p className="text-text_color-100 max-w-md">
            If you are looking for a job with us in solar, EV, or energy
            storage, we’re here to help you build a career in the renewable
            future.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <img
              src={Img1}
              alt="Team"
              className="w-14 h-14 rounded-full border-2 border-primary-100"
            />
            <div>
              <p className="font-semibold">Celvonix Careers</p>
              <p className="text-sm text-text_color-100">
                Let’s power the world together.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image Grid (mimicking card layout) */}
        <div className="grid grid-cols-2 grid-rows-2 gap-6">
          <div className="rounded-2xl overflow-hidden bg-[#222222]/60 backdrop-blur-md border border-white/10 hover:border-primary-100/60 hover:shadow-[0_0_25px_#64FF0A40] transition-all hover:scale-105">
            <img src={images[0]} alt="Solar" className="w-full h-48 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#222222]/60 backdrop-blur-md border border-white/10 hover:border-primary-100/60 hover:shadow-[0_0_25px_#64FF0A40] transition-all hover:scale-105">
            <img src={images[1]} alt="EV" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#222222]/60 backdrop-blur-md border border-white/10 hover:border-primary-100/60 hover:shadow-[0_0_25px_#64FF0A40] transition-all hover:scale-105 col-span-1 row-span-1">
            <img src={images[2]} alt="Battery" className="w-full h-56 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#222222]/60 backdrop-blur-md border border-white/10 hover:border-primary-100/60 hover:shadow-[0_0_25px_#64FF0A40] transition-all hover:scale-105">
            <img src={images[3]} alt="Wind" className="w-full h-40 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutScreen;

