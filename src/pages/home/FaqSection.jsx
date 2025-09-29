import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MiniLogo from "../../images/bgLogo.png";


const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqs = [
    {
      question: "Do I need to maintain my solar panels?",
      answer:
        "Battery storage helps you store excess energy for later use, ensuring you have power during cloudy days or outages.",
    },
    {
      question: "Can I switch to solar if I rent my home?",
      answer:
        "Yes, there are several options for renters including portable solar panels, community solar programs, and working with landlords to install systems. Each option has different benefits and requirements.",
    },
    {
      question: "How Much will I save by going solar?",
      answer:
        "Solar savings depend on your location, energy usage, local electricity rates, and available incentives. Most homeowners save 20-90% on their electricity bills, with average savings of $1,000-$1,500 annually.",
    },
  ];

  return (
    <div className="relative text-white py-20 px-6 overflow-hidden">
      {/* Background Glow Effects */}
      {/* <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary-100/20 rounded-full blur-3xl"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/10 rounded-full blur-3xl"></div> */}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <img src={MiniLogo} alt="Mini Logo" className="w-8 h-8 mr-2" />
            <span className="text-primary-100 font-medium tracking-wide uppercase">
              CELVONIX FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Got <span className="text-primary-100">Questions</span>?  
            <br /> We’ve Got <span className="text-primary-100">Answers</span>
          </h2>
          {/* <p className="text_text-100 max-w-2xl mx-auto text-lg">
            Explore the most common doubts people have about switching to solar,
            answered in a simple, clear way.
          </p> */}
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
        {faqs.map((faq, index) => (
  <div
    key={index}
    className={`relative rounded-xl border border-gray-700 backdrop-blur-lg overflow-hidden transition-all duration-300 shadow-lg ${
      activeIndex === index ? "bg-primary-100/10" : "bg-black/40"
    }`}
    onMouseEnter={() => setActiveIndex(index)}
    onMouseLeave={() => setActiveIndex(-1)}
  >
    {/* Neon Left Border */}
    <div
      className={`absolute left-0 top-0 h-full w-1.5 transition-all duration-500 ${
        activeIndex === index
          ? "bg-primary-100 shadow-[0_0_15px_2px_#64FF0A]"
          : "bg-transparent"
      }`}
    ></div>

    <div className="w-full px-6 py-5 flex items-center justify-between text-left group">
      <div className="flex items-center gap-4">
        {/* Number Badge */}
        <span
          className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold border transition-colors duration-300 ${
            activeIndex === index
              ? "bg-primary-100 text-black border-primary-100"
              : "text-primary-100 border-primary-100/40 group-hover:border-primary-100"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span
          className={`text-lg font-medium transition-colors ${
            activeIndex === index
              ? "text-primary-100"
              : "text-white group-hover:text-primary-100"
          }`}
        >
          {faq.question}
        </span>
      </div>

      {/* Icon */}
      {activeIndex === index ? (
        <FaChevronUp className="w-5 h-5 text-primary-100" />
      ) : (
        <FaChevronDown className="w-5 h-5 text-gray-400 group-hover:text-primary-100" />
      )}
    </div>

    {/* Answer */}
    <div
      className={`grid transition-all duration-500 ease-in-out ${
        activeIndex === index
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden px-6 pb-5">
        <p className="text_text-100">{faq.answer}</p>
      </div>
    </div>
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default FaqSection;
