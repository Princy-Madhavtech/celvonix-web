import React from "react";
import Contact1 from "../../images/contact1.png";
import Contact2 from "../../images/contact2.png";
import Contact3 from "../../images/contact3.png";
import PageHeader from "../../component/global/PageHeader";
import ContactSection from "./ContactSection";
import ContactCard from "../home/ContactCard";
const ContactIndex = () => {
  return (
    <>
      <PageHeader title="Contact Us" breadcrumb="Contact Us" />{" "}
      <div className="bg-black text-white py-12">
        <h2 className="text-center text-primary-100 text-xl font-semibold mb-10">
          Get in touch with us !
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center px-6 border-r border-primary-100 md:last:border-none">
            <img
              src={Contact1}
              alt="Address"
              className="w-16 h-16 mb-4 p-1 rounded-lg"
            />
            <h3 className="text-lg font-bold mb-2">Address</h3>
            <p className="text-sm text_text-100 leading-6">
              456, tree tower, Rennam <br /> City pin no 652652
            </p>
          </div>
          {/* Email */}
          <div className="flex flex-col items-center px-6 border-r border-primary-100 md:last:border-none">
            <img
              src={Contact2}
              alt="Email"
              className="w-16 h-16 mb-4 p-1"
            />
            <h3 className="text-lg font-bold mb-2">Email Us</h3>{" "}
            <p className="text-sm text_text-100">abc@gmail.com</p>{" "}
            <p className="text-sm text_text-100">efg@gmail.com</p>{" "}
          </div>
          {/* Call Now */}
          <div className="flex flex-col items-center px-6">
            <img
              src={Contact3}
              alt="Call"
              className="w-16 h-16 mb-4 p-1"
            />
            <h3 className="text-lg font-bold mb-2">Call Now</h3>{" "}
            <p className="text-sm text_text-100">+1234567890</p>{" "}
            <p className="text-sm text_text-100">+0987654321</p>{" "}
          </div>
        </div>
      </div>
      <ContactSection />
      <div className="bg-black">
      <ContactCard/>
      </div>
      
     
    </>
  );
};
export default ContactIndex;
