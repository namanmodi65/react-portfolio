import React, { Component } from 'react'
import './HeaderImgStyle.css'

export default class HeaderImg extends Component {
    render() {
        return (
            <div className='headerImg'>
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}
