import React from 'react'
import Header from './Header'
import AboutSection from './AboutSection'
import Footer from '../../component/global/Footer'

const HomeIndex = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
    <Header/>
    <AboutSection/>
    <Footer/>
    </div>
  )
}

export default HomeIndex
