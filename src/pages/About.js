import React from 'react'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import HeaderImg from '../components/HeaderImg'
import AboutContent from '../components/AboutContent'


function About() {
  return (
    <div>
      <Navbar/>
      <HeaderImg heading="About me" text="I'm a student" />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About