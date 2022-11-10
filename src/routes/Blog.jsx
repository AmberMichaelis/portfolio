import React from 'react'
import BannerImage1 from '../components/BannerImage1'
import Navbar from '../components/Navbar'
import BlogCards from '../components/BlogCards'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <div>
        <Navbar />
        <BannerImage1 heading='PROJECTS' text='Super fun personal creations.'/>
        <BlogCards />
        <Footer />
    </div>
  )
}

export default Projects
