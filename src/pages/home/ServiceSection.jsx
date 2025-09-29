import React from "react";
import Service1 from "../../images/11.png";
import Service2 from "../../images/cel7.png";
import Service3 from "../../images/cel8.png";
import Heart from "../../images/heart.png";
import MiniLogo from "../../images/bgLogo.png";

import { NavLink } from "react-router-dom";

const services = [
  {
    id: 1,
    img: Service1,
    icon: Heart,
    title: "Energy Storage",
    desc: "From home and business solutions to utility-scale grids, we deliver reliable storage systems for every application.",
  },
  {
    id: 2,
    img: Service2,
    icon: Heart,
    title: "Electric Vehicles",
    desc: "Supporting mobility across personal cars, trucks, buses, e-bikes, golf carts, and low-speed vehicles with clean energy power.",
  },
  {
    id: 3,
    img: Service3,
    icon: Heart,
    title: "Smart Electric Devices",
    desc: "Enabling the next generation of technology—from AGVs and eVTOL aircraft to intelligent, AI-powered robotics.",
  },
];


const ServiceSection = () => {
  return (
    <section className="text-white py-16 px-6 lg:px-20">
      {/* Top Heading */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={MiniLogo} alt="mini logo" className="w-6 h-6" />
            <p className="uppercase text-sm tracking-wide text-primary-100 font-semibold">
              Our Service
            </p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
            Smart Power Solutions For <br /> A Brighter Future
          </h2>
        </div>

        <p className="text-text_color-100 max-w-xl leading-relaxed">
          We provide cutting edge sustainable energy solutions designed to help
          homes and businesses transition to clean cost effective power. Our
          expert team specializes in solar energy systems.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            {/* Service Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-100/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-b-xl pointer-events-none"></div>

            {/* Card Overlay with Glass Effect */}
            <div className="absolute bottom-4 left-4 right-4 p-5 rounded-md shadow-lg bg-black/60 backdrop-blur-md border border-white/30 text-white transition duration-500">
              <div className="flex items-center gap-3 mb-3">
                {/* <img src={service.icon} alt="icon" className="w-8 h-8" /> */}
                <h3 className="font-bold text-lg">{service.title}</h3>
              </div>
              <p className="text-sm mb-4">{service.desc}</p>

              <NavLink
                to="/about"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary-100 transition"
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
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
