import React from 'react'
import { Card } from '../components/Card'
import { Footer } from '../components/Footer'
import HeaderImg from '../components/HeaderImg'
import Navbar from '../components/Navbar'

function Project() {
  return (
    <div>
      <Navbar/>
      <HeaderImg heading="Projects" text="Some of my recent works"/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Project