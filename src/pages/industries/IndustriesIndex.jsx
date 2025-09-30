import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../component/global/PageHeader";

import ContactCard from "../home/ContactCard"
import Pro from "../../images/11.png";
import Cabinet from "../../images/Cabinet.png";
import Storage from "../../images/Storage.webp";
import Inverter from "../../images/Inverter.webp";
import Battery from "../../images/Battery.webp";
import Bus from "../../images/Bus.webp";
import Battery2 from "../../images/Battery2.jpeg";
import Forklifts from "../../images/Forklifts.jpg";
import Heavy from "../../images/Heavy.webp";
import Underground from "../../images/Underground.jpg";


const industriesData = [
  {
    key: "storage",
    title: "Electric Storage",
    desc: "Reliable and efficient lithium-ion storage solutions for home & industrial needs.",
    products: [
      {
        name: "TRACK Outdoor Liquid-cooled Battery Cabinet",
        desc: "High efficiency liquid cooling technology with the temperature difference ≤3°C",
        img: Cabinet,
        specs: {
          capacity: "10 kWh",
          voltage: "400V",
          lifespan: "12 years",
          warranty: "5 years",
        },
        features: [
          "built-in independent fire protection system",
          "280AH large single batteries, adopting laser welding process",
          "Integrated cabinet design",
          "with IP54 protection",
          "Enabling direct outdoor installation",
          "Intelligent BMS system, offering real-time monitoring system security",
          "Advanced heat insulation refractory, provide 2h of fire resistance"
        ],
        useCases: ["Home backup", "Industrial storage", "Solar integration"],
      },
      {
        name: "Utility-grade Energy Storage",
        desc: "Uses lithium iron phosphate (LFP) cells with excellent thermal stability",
        img: Storage,
        specs: {
          capacity: "5 kWh",
          voltage: "220V",
          lifespan: "8 years",
          warranty: "3 years",
        },
        features: [
          "IP54-rated protection to meet outdoor application requirements",
          "PACK-level fire prevention and explosion-proof design",
          "Adaptive expansion force design and IP67-rated PACK design",
          "Integrated variable-frequency liquid cooling system keeps internal cell temperature difference within 3°C",
          "Lifespan up to 15 years at 70% capacity retention",
          "Compatible with 1250/2725/2500K NPCS systems and supports 2/3/4-hour applications",
          "CTP (Cell-to-Pack) high energy density design",
          "Significantly reduced EPC (Engineering, Procurement, Construction) costs",
        ],
        useCases: ["Portable devices", "Home appliances", "EV support"],
      },
      {
        name: "Split Phase Hybrid Inverter",
        desc: "Up to 200% oversizing allowed with 3 MPPTs",
        img: Inverter,
        specs: {
          capacity: "5 kWh",
          voltage: "220V",
          lifespan: "8 years",
          warranty: "3 years",
        },
        features: [
          "Support high power module with 30A PV input current",
          "Support AC coupled solar input",
          "Integrated arc fault circuit interrupter (AFCI) and rapid shutdown",
          "standby generator connection tor whole-home back up",
          "Four application modes, mixed with time control",
          "Built-in DC Breaker for safety and reliability",
          "Continuous 110% of nominal AC power",
          "Maximum battery charge/discharge current of 210A",
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
        name: "Lithium Iron Golf Cart Battery System",
        desc: "High-performance 51.2V lithium iron battery designed for golf carts with efficient charging and long lifespan.",
        img: Battery, // replace with your actual image import/variable
        specs: {
          ratedVoltage: "51.2V",
          ratedEnergy: "5.15 kWh",
          continuousChargeCurrent: "100A",
          continuousDischargeCurrent: "100A",
          chargingTempRange: "-0 ~ 60°C",
          dischargingTempRange: "-20 ~ 60°C",
          dimensions: "460 × 343 × 247 mm",
          weight: "41.2 ± 2 Kg"
        },
        features: [
          "High energy density",
          "Fast charging capability",
          "Long cycle life",
          "Lightweight and compact design",
          "Wide operating temperature range"
        ],
        useCases: [
          "Golf carts",
          "Utility vehicles",
          "Leisure vehicles",
          "Small EV applications"
        ]
      },
      {
        name: "Passenger Vehicle Battery System",
        desc: "Advanced 350.4V lithium-ion battery designed for passenger vehicles with high energy capacity and reliable performance.",
        img: Bus, // replace with your actual image import/variable
        specs: {
          ratedVoltage: "350.4V",
          ratedEnergy: "54.66 kWh",
          continuousChargeCurrent: "156A",
          continuousDischargeCurrent: "156A",
          chargingTempRange: "-20 ~ 60°C",
          dischargingTempRange: "-20 ~ 60°C",
          dimensions: "1814 × 1011 × 274 mm",
          weight: "350 ± 5 Kg"
        },
        features: [
          "High voltage system for passenger EVs",
          "Large energy capacity for extended driving range",
          "Stable performance in harsh environments",
          "Long cycle life and fast charging support",
          "Lightweight design for optimized efficiency"
        ],
        useCases: [
          "Passenger cars",
          "Electric SUVs",
          "Shared mobility vehicles",
          "Long-distance electric transport"
        ]
      },      
      {
        name: "Lithium-ion Battery System for Warehouse Forklifts",
        desc: "Heavy-duty 51.2V lithium-ion battery designed for warehouse forklifts with high capacity and robust performance.",
        img: Battery2, // replace with your actual image import/variable
        specs: {
          ratedVoltage: "51.2V",
          ratedEnergy: "28.67 kWh",
          continuousChargeCurrent: "300A",
          continuousDischargeCurrent: "300A",
          chargingTempRange: "0 ~ 60°C",
          dischargingTempRange: "-20 ~ 60°C",
          dimensions: "810 × 465 × 590 mm",
          weight: "320 ± 8 Kg"
        },
        features: [
          "High capacity for demanding forklift operations",
          "Fast charging with 300A capability",
          "Long cycle life and durability",
          "Stable performance in wide temperature ranges",
          "Designed for heavy-duty industrial use"
        ],
        useCases: [
          "Warehouse forklifts",
          "Material handling equipment",
          "Industrial logistics",
          "Heavy-duty electric vehicles"
        ]
      }
      
    ],
  },
  {
    key: "device",
    title: "Electric Device",
    desc: "Smart and sustainable vehicles with long-range batteries and cutting-edge performance.",
    products: [
      {
        name: "Compact AGV Weeder Battery Pack",
        desc: "Lightweight 51.52V lithium battery designed for AGV weeders, offering compact size, efficiency, and reliability.",
        img: Forklifts, // replace with actual image import/variable
        specs: {
          ratedVoltage: "51.52V",
          ratedEnergy: "2.06 kWh",
          continuousChargeCurrent: "40A",
          continuousDischargeCurrent: "40A",
          chargingTempRange: "0 ~ 60°C",
          dischargingTempRange: "-20 ~ 60°C",
          dimensions: "355 × 320 × 127 mm",
          weight: "27 ± 1 Kg"
        },
        features: [
          "Compact and lightweight design",
          "Optimized for AGV weeder applications",
          "Efficient charging and discharging",
          "Durable and reliable performance",
          "Wide temperature adaptability"
        ],
        useCases: [
          "AGV weeders",
          "Small agricultural machinery",
          "Light-duty autonomous vehicles",
          "Robotics applications"
        ]
      },
      {
        name: "Port-use Heavy-duty AGV Battery Pack",
        desc: "High-capacity 625.6V battery pack designed for port-use heavy-duty AGVs, built for extreme environments and long operation cycles.",
        img: Heavy, // replace with actual image import/variable
        specs: {
          ratedVoltage: "DC 625.6V",
          ratedEnergy: "50.04 kWh",
          continuousChargeCurrent: "240A",
          continuousDischargeCurrent: "180A",
          chargingTempRange: "-30 ~ 55°C",
          dischargingTempRange: "-30 ~ 55°C",
          dimensions: "3092 × 712 × 1150 mm"
        },
        features: [
          "High voltage system for heavy-duty AGVs",
          "Resistant to extreme operating temperatures",
          "Reliable continuous performance",
          "Large capacity for long-duration operations",
          "Industrial-grade durability"
        ],
        useCases: [
          "Port heavy-duty AGVs",
          "Cargo handling vehicles",
          "Industrial transport equipment",
          "Autonomous heavy vehicles"
        ]
      },
      {
        name: "Battery Pack for Coal Mine Underground Vehicles",
        desc: "Specialized 160V lithium battery pack designed for coal mine underground vehicles with high safety, energy density, and durability.",
        img: Underground, // replace with actual image import/variable
        specs: {
          ratedVoltage: "160V",
          ratedEnergy: "36.8 kWh",
          continuousChargeCurrent: "115A",
          continuousDischargeCurrent: "180A",
          chargingTempRange: "0 ~ 55°C",
          dischargingTempRange: "-20 ~ 60°C",
          dimensions: "1444 × 671 × 290 mm",
          weight: "455 Kg",
          volumetricEnergyDensity: "131 Wh/L",
          gravimetricEnergyDensity: "74 Wh/kg"
        },
        features: [
          "Designed for coal mine underground environments",
          "High volumetric and gravimetric energy density",
          "Strong and durable structure",
          "Safe operation in demanding conditions",
          "Long cycle life"
        ],
        useCases: [
          "Coal mine underground vehicles",
          "Mining transportation equipment",
          "Harsh industrial applications"
        ]
      }
      
      
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
                className="w-full h-[450px] object-cover rounded-2xl shadow-[0_0_30px_rgba(100,255,10,0.5)] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-5">
              <h3 className="text-4xl font-bold text-primary-100 tracking-wide">
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
      <ContactCard/>

    </div>
  );
};

export default IndustriesIndex;
