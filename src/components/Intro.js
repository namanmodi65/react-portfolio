import React from 'react'
import { Link } from 'react-router-dom'
import './IntroStyle.css'
function Intro() {
  return (
    <div className='intro-header'>
      <div className='mask'>
        <img className='intro-img' src="https://img.freepik.com/free-photo/php-programming-html-coding-cyberspace-concept_53876-124783.jpg?w=2000" alt="intro-img"/>
      </div>
      <div className="intro-content">
        <p>Hello,my name is <span>Naman jain</span></p>
        <p>I'm a Student</p>
        <h1>Web Developer</h1>
      <div>
        <Link className='btn' to='/project'>Projects</Link>
        <Link className='btn' to='/contact'>Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default Intro