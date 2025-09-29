import React from "react"
import Header from "./Header"
import AboutSection from "./AboutSection"
import ServiceSection from "./ServiceSection"
// import TeamMember from "./TeamMember"
import FaqSection from "./FaqSection"
import ContactCard from "./ContactCard"
import ProductCard from "./ProductCard"

const HomeIndex = () => {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* Fixed glowing circles (stay in viewport, don't scroll) */}
      <div className="fixed top-10 left-10 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-20 right-10 w-[500px] h-[500px] bg-[#00ffcc]/15 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      {/* Content Sections */}
      <Header />
      <AboutSection />
      <ServiceSection />
      {/* <TeamMember /> */}
      <FaqSection />
      <ProductCard/>
      <ContactCard/>
    </div>
  )
}

export default HomeIndex
