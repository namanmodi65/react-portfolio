import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import './ContactContentStyle.css'

function ContactContent() {
    return (
        <div className='contact'>
            <h1>You can contact me on</h1>
            <div className="contact-source">
                <div className='source'>
                <FaMailBulk size={40} /><p>naman.jain.aiml21@ggits.net</p>
                </div>
                <div className='source'>
                <FaPhone size={40} /><p>+91 9174707681</p>
                </div>
                <div className='source'>
                <FaGithub size={40} /><p>namanmodi65</p>
                </div>
                <div className='source'>
                <FaLinkedin size={40} /><p>Naman jain</p>
                </div>
            </div>
        </div>
    )
}

export default ContactContent