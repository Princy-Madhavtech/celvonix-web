import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import ContactImg from "../../images/contact.png";

const ContactSection = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side - Contact Form */}
        <div className="relative">
          <div className="relative bg-[#1b1c20]/80 backdrop-blur-md border border-gray-700 p-10 rounded-2xl shadow-2xl">
            
            {/* Title */}
            <h2 className="text-4xl font-bold mb-2">
              Reach <span className="text-primary-100">Out to Us</span>
            </h2>
            <p className="text-gray-400 text-sm mb-10 max-w-md">
              Fill out the form and we’ll get back to you as soon as possible.
            </p>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    className="peer w-full bg-transparent border-b border-gray-600 px-0 py-3 text-sm placeholder-transparent focus:outline-none focus:border-primary-100 transition"
                  />
                  <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-primary-100 peer-focus:text-sm">
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Company"
                    className="peer w-full bg-transparent border-b border-gray-600 px-0 py-3 text-sm placeholder-transparent focus:outline-none focus:border-primary-100 transition"
                  />
                  <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-primary-100 peer-focus:text-sm">
                    Company
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="peer w-full bg-transparent border-b border-gray-600 px-0 py-3 text-sm placeholder-transparent focus:outline-none focus:border-primary-100 transition"
                  />
                  <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-primary-100 peer-focus:text-sm">
                    Phone
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="peer w-full bg-transparent border-b border-gray-600 px-0 py-3 text-sm placeholder-transparent focus:outline-none focus:border-primary-100 transition"
                  />
                  <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-primary-100 peer-focus:text-sm">
                    Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Subject"
                  className="peer w-full bg-transparent border-b border-gray-600 px-0 py-3 text-sm placeholder-transparent focus:outline-none focus:border-primary-100 transition"
                />
                <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-primary-100 peer-focus:text-sm">
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="peer w-full bg-transparent border-b border-gray-600 px-0 py-3 text-sm placeholder-transparent focus:outline-none focus:border-primary-100 transition"
                />
                <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-primary-100 peer-focus:text-sm">
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-100 to-primary-300 rounded-xl text-black font-semibold hover:scale-105 transform transition shadow-lg"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Contact Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ContactImg}
              alt="Contact"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
