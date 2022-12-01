import React from 'react'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import HeaderImg from '../components/HeaderImg'
import ContactContent from '../components/ContactContent'


function Contact() {
  return (
    <div>
      <Navbar/>
      <HeaderImg heading="Contact me" text="Let's talk" />
      <ContactContent/>
      <Footer/>
    </div>
  )
}

export default Contact