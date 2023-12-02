import React from 'react'
import {FaFacebookF, FaInstagram, FaTiktok} from 'react-icons/fa'

const Footer = () => {
return (
    <div className='footer'>
        <div className="footer-container">
            <div className="row">
                <div className="footer-col">
                    <h4>Restaurant</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">Orders</a></li>
                        <li><a href="#">Returns</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <div className="social-media">
                        <FaFacebookF className='fb' />
                        <FaInstagram  className='ig'/>
                        <FaTiktok className='tt' />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Footer
