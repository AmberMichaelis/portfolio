import React from 'react'
import BannerImage1 from '../components/BannerImage1'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ResumeSection from '../components/Resume'


const Resume = () => {
  return (
    <div>
        <Navbar />
        <BannerImage1 heading='RESUME' text='Join the Experience.'/>
        <ResumeSection />
        <Footer />
    </div>
  )
}

export default Resume
