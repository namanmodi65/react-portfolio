import React from 'react'
// import { Link } from 'react-router-dom'
import './CardStyle.css'

export const Card = () => {
    return (
        <div className='Card'>

            <div className="card" style={{width: "18rem",backgroundColor:"#161515"}}>
                
                    <div className="card-body">
                        <h5 className="card-title">Blog web application</h5>
                        <p className="card-text">This is a Blog web application where you can share your learning and experience . I made this using MERN stack for using this you have to login or resister first then you can publish your blog and user also have rights to edit or delete their blog .</p>
                        <a  href="https://github.com/namanmodi65/Blog-Web-Application" className="btn btn-primary">Code</a>
                    </div>
            </div>

            <div className="card" style={{width: "18rem",backgroundColor:"#161515"}}>
                
                    <div className="card-body">
                        <h5 className="card-title">Health Id</h5>
                        <p className="card-text">In this project I have maked health-id web application which stored all your health related information. For using health-id you have to sign up first then you can easily add your report.</p>
                        <a  href="https://github.com/namanmodi65/Health-Id" className="btn btn-primary">Code</a>
                    </div>
            </div>

            <div className="card" style={{width: "18rem",backgroundColor:"#161515"}}>
                
                    <div className="card-body">
                        <h5 className="card-title">NewsApp</h5>
                        <p className="card-text">This is web application for latest news. I fetch all the news using news api and also used bootstrap for design</p>
                        <a  href={"https://github.com/namanmodi65/NewsApp"} className="btn btn-primary">Code</a>
                    </div>
            </div>

            

        </div>
    )
}
