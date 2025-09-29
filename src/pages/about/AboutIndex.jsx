import React from 'react'
import PageHeader from '../../component/global/PageHeader'
import AboutSection from '../home/AboutSection'
import AboutJobs from './Vision'
const AboutIndex = () => {
  return (
    <div className='bg-black'>
      <PageHeader title="About Us" breadcrumb="About Us" />
      {/* <AboutScreen/> */}
      <AboutSection />
      <AboutJobs/>
    </div>
  )
}

export default AboutIndex
