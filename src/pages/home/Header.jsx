import React from 'react'
import Navbar from '../../component/global/Navbar'

const Header = () => {
  return (
    <div>
      <Navbar/>

      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat min-h-[520px] md:min-h-[650px] lg:min-h-[750px] flex items-start md:items-center"
        style={{ backgroundImage: "url('/assets/home.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10 py-12 md:py-16 lg:py-24">
          <div className="max-w-3xl text-white">
            <p className="uppercase tracking-widest text-[10px] text-white-100 md:text-xs text-primary-100 mb-4 md:mb-6 flex items-center">
              <img src="/assets/small_logo.png" alt="Celvonix" className="mr-2" />
              CUTTING-EDGE ELECTRICAL SOLUTIONS
            </p>
            <h1 className="text-white-100 text-3xl sm:text-5xl md:text-6xl leading-tight mb-5 md:mb-6">
              Unleash The Power
              <br />
              of Clean Energy!
            </h1>
            <p className="text-gray-400 mb-6 md:mb-8 max-w-xl text-sm md:text-base">
              The future of energy is clean, smart, and sustainable—and at CELVONIX, we're leading the charge. Say goodbye to high.
            </p>
            <button className="bg-primary-100 text-black font-semibold px-6 py-3 rounded hover:bg-primary-300 transition inline-flex items-center w-full sm:w-auto justify-center">
              Explore Our Solutions
              <span className="ml-2">↗</span>
            </button>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10 md:mt-12 text-left">
              <div>
                <div className="text-xl md:text-2xl font-extrabold text-white">1500+</div>
                <div className="text-gray-400 text-xs md:text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-extrabold text-white">750+</div>
                <div className="text-gray-400 text-xs md:text-sm">Happy Customer</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-extrabold text-white">98%</div>
                <div className="text-gray-400 text-xs md:text-sm">Satisfied Customer</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header
