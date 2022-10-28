import React from 'react'
import BannerImage1 from '../components/BannerImage1'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <BannerImage1 heading='CONTACT' text="Amber Michaelis"/>
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Contact
