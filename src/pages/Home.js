import React from 'react'
import { Footer } from '../components/Footer'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Footer/>
    </div>
  )
}

export default Home