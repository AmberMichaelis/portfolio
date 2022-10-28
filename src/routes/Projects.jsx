import React from 'react'
import BannerImage1 from '../components/BannerImage1'
import Navbar from '../components/Navbar'
import ProjectCards from '../components/ProjectCards'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <div>
        <Navbar />
        <BannerImage1 heading='PROJECTS' text='Super fun personal creations.'/>
        <ProjectCards />
        <Footer />
    </div>
  )
}

export default Projects
