import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md p-4'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='text-xl font-bold text-primary-100'>
          Celvonix
        </div>
        <div className='space-x-4'>
          <button className='text-gray-600 hover:text-primary-100 transition-colors bg-transparent border-none cursor-pointer'>
            Home
          </button>
          <button className='text-gray-600 hover:text-primary-100 transition-colors bg-transparent border-none cursor-pointer'>
            About
          </button>
          <button className='text-gray-600 hover:text-primary-100 transition-colors bg-transparent border-none cursor-pointer'>
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
