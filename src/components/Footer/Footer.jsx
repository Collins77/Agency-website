import React from 'react'
import './Footer.css'
import EmailBox from '../EmailBox/EmailBox'

const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="container">
            <div className="f-container">
                <span className="title">
                    Get Funded Today!
                </span>
                <EmailBox />

                <hr/>
                <div className="f-menu">
                    <span>Home</span>
                    <span>What we do</span>
                    <span>how it works</span>
                    <span>who we invest</span>
                    <span>testimonials</span>
                </div>
                <hr />

                <span className='text'>
                    Made with love by Cotek Technologies
                </span>
            </div>
        </div>
    </div>
  )
}

export default Footer