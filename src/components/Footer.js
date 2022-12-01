import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import './FooterStyle.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                   <FaHome size={20} style={{marginRight:"2rem"}}/> Panagar,Jabalpur
                </div>
                <div className="phone" >
                    <FaPhone size={20} style={{marginRight:"2rem"}}/> +91-9174707681
                </div>
                <div className="email" >
                    <FaMailBulk size={20} style={{marginRight:"2rem"}}/> naman.jain.aiml21@ggits.net
                </div>
            </div>

            <div className="right">
                <div className="social">
                    <FaLinkedin size={30} style={{marginRight:"2rem"}}/>
                    <FaGithub size={30} style={{marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}
