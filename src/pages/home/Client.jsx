import React, { useState } from "react";
import {
  FaStar,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
  FaUser,
} from "react-icons/fa";
import Clientbg from "../../images/clientbg.png";

const Client = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      text: "It was great working with Atanu and his team at Websitiers on a tailored landing page design project. They were highly professional and executed the project successfully as requested. I highly recommend Websitiers.",
      rating: 5,
      company: "Tech Solutions Inc.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      text: "Outstanding service and exceptional results. The solar installation exceeded our expectations and the team was incredibly knowledgeable throughout the entire process.",
      rating: 5,
      company: "Green Energy Co.",
    },
    {
      id: 3,
      name: "Michael Davis",
      text: "Professional, reliable, and efficient. CELVONIX delivered exactly what they promised and more. Our energy bills have decreased significantly since installation.",
      rating: 5,
      company: "Sustainable Living",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`w-6 h-6 ${
          index < rating ? "text-primary-100" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={Clientbg}
          alt="Client testimonials background"
          className="w-full h-[50vh] object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-200/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">what</span>
            <span className="text-primary-100"> Our</span>
            <br />
            <span className="text-primary-100">Client Says</span>
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Testimonial Content */}
          <div className="bg-primary-200/95 rounded-2xl p-8 backdrop-blur-sm border border-primary-100/20">
            {/* Quote Icon */}
            <div className="mb-6">
              <FaQuoteRight className="w-12 h-12 text-primary-100" />
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-white text-lg leading-relaxed mb-8">
              {testimonials[currentTestimonial].text}
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <FaUser className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <h4 className="text-primary-100 font-semibold text-lg">
                    -{testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-text_color-100 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-300 transition-colors duration-200"
              >
                <FaChevronLeft className="w-5 h-5 text-primary-200" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial
                        ? "bg-primary-100"
                        : "bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary-300 transition-colors duration-200"
              >
                <FaChevronRight className="w-5 h-5 text-primary-200" />
              </button>
            </div>
          </div>

          {/* Right Side - Rating Cards */}
          <div className="relative">
            <div className="space-y-6">
              {/* Customer Satisfaction Card */}
              <div className="bg-primary-200/90 backdrop-blur-sm border border-primary-100/30 rounded-lg p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <p className="text-text_color-100 text-sm mb-2">
                  CUSTOMER SATISFACTION
                </p>
                <div className="flex items-center space-x-2">
                  {renderStars(5)}
                </div>
                <p className="text-white text-2xl font-bold mt-2">5.0</p>
              </div>

              {/* Overall Rating Card */}
              <div className="bg-primary-200/90 backdrop-blur-sm border border-primary-100/30 rounded-lg p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300 ml-8">
                <p className="text-text_color-100 text-sm mb-2">
                  OVERALL RATING
                </p>
                <div className="flex items-center space-x-2">
                  {renderStars(5)}
                </div>
                <p className="text-white text-2xl font-bold mt-2">5.0</p>
              </div>

              {/* Google Rating Card */}
              <div className="bg-primary-200/90 backdrop-blur-sm border border-primary-100/30 rounded-lg p-4 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <p className="text-text_color-100 text-sm mb-2">
                  GOOGLE RATING
                </p>
                <div className="flex items-center space-x-2">
                  {renderStars(5)}
                </div>
                <p className="text-white text-2xl font-bold mt-2">5.0</p>
              </div>
            </div>

            {/* Large Star Rating Display */}
            <div className="absolute -bottom-4 -right-4">
              <div className="flex space-x-1">
                {renderStars(5).map((star, index) => (
                  <div key={index} className="transform scale-150">
                    {star}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-100 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-6 h-6 bg-primary-100 rounded-full opacity-40 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Client;
