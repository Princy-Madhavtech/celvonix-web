import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../component/global/PageHeader";
import Pro from "../../images/11.png";

const industriesData = [
  {
    key: "storage",
    title: "Electric Storage",
    desc: "Reliable and efficient lithium-ion storage solutions for home & industrial needs.",
    products: [
      {
        name: "Battery Pack X1",
        desc: "High-capacity lithium-ion battery for home and industrial storage.",
        img: Pro,
        specs: {
          capacity: "10 kWh",
          voltage: "400V",
          lifespan: "12 years",
          warranty: "5 years",
        },
        features: [
          "Fast charging technology",
          "Smart energy monitoring",
          "Overheat protection",
          "Eco-friendly recyclable cells",
        ],
        useCases: ["Home backup", "Industrial storage", "Solar integration"],
      },
      {
        name: "Battery Pack X2",
        desc: "Compact, fast-charging storage battery suitable for all devices.",
        img: Pro,
        specs: {
          capacity: "5 kWh",
          voltage: "220V",
          lifespan: "8 years",
          warranty: "3 years",
        },
        features: [
          "Compact & portable design",
          "Quick-charge enabled",
          "Durable weatherproof casing",
        ],
        useCases: ["Portable devices", "Home appliances", "EV support"],
      },
    ],
  },
  {
    key: "vehicle",
    title: "Electric Vehicle",
    desc: "Smart and sustainable vehicles with long-range batteries and cutting-edge performance.",
    products: [
      {
        name: "E-Car Model A",
        desc: "Eco-friendly electric car with long-range battery and fast charging.",
        img: Pro,
        specs: {
          range: "400 km",
          battery: "85 kWh",
          chargeTime: "1 hr (fast charge)",
        },
        features: ["AI-assisted driving", "Fast-charging port", "Zero emissions"],
        useCases: ["City travel", "Long-distance driving", "Fleet vehicles"],
      },
      {
        name: "E-Bike Pro",
        desc: "High-performance electric bike with smart battery management.",
        img: Pro,
        specs: {
          range: "120 km",
          battery: "10 kWh",
          chargeTime: "45 mins",
        },
        features: ["Lightweight frame", "Regenerative braking", "Bluetooth app sync"],
        useCases: ["Daily commute", "Recreational rides", "Eco-friendly delivery"],
      },
    ],
  },
];


const IndustriesIndex = () => {
  const { key } = useParams();
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0].key);

  useEffect(() => {
    if (key && industriesData.some((ind) => ind.key === key)) {
      setSelectedIndustry(key);
    }
  }, [key]);

  const currentIndustry = industriesData.find(
    (industry) => industry.key === selectedIndustry
  );

  return (
    <div className="bg-black text-white min-h-screen relative">
      <PageHeader title="Industries" breadcrumb="Industries" />

    {/* Products */}
<div className="space-y-32 py-20 xl:mx-20 md:mx-12">
  {currentIndustry.products.map((product, idx) => (
    <div
      key={idx}
      className={`flex flex-col md:flex-row items-center gap-12 
        ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-[350px] object-cover rounded-2xl shadow-[0_0_30px_rgba(100,255,10,0.5)] transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-5">
        <h3 className="text-4xl font-bold text-white tracking-wide">
          {product.name}
        </h3>
        <p className="text-gray-300">{product.desc}</p>

        {/* Features */}
        <ul className="space-y-2 text-gray-400">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-100 rounded-full"></span>
              {f}
            </li>
          ))}
        </ul>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-300">
          {Object.entries(product.specs).map(([k, v], i) => (
            <div
              key={i}
              className="bg-white/5 p-3 rounded-lg border border-white/10"
            >
              <p className="uppercase text-xs text-gray-400">{k}</p>
              <p className="text-primary-100 font-semibold">{v}</p>
            </div>
          ))}
        </div>

        {/* Use cases */}
        <div className="flex flex-wrap gap-2 mt-4">
          {product.useCases.map((u, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-gray-300"
            >
              {u}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default IndustriesIndex;
