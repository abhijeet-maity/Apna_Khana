import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer-section' id='FooterSection'>
        <div className="footer-details">
            <div className="left-side-footer">
                <img className='footer-logo' src={assets.TomatoLogo}/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit repellendus necessitatibus architecto temporibus nisi perspiciatis, expedita nemo at aut voluptates? Velit, a. Odio nam nisi, totam dignissimos quo eveniet atque?</p>
                <div className="social-connection-section">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="center-side-footer">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="right-side-footer">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+1-100-200-9194</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ Tomato.com - All Rights Reserved</p>
        <hr/>
    </div>
  )
}

export default Footer