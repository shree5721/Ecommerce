import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div>
                <ul className='footer-links'>
                    <li>About Us</li>
                    <li>Offices</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-icons">
                <span><i className="fa-brands fa-instagram"></i></span>
                <span><i className="fa-brands fa-pinterest"></i></span>
                <span><i className="fa-brands fa-whatsapp"></i></span>
            </div>
            <div className="copy-rights">
                <p>Copyright @ 2024  All rights reserved</p>
                <p>Design by Shree Pore with ❤️</p>
            </div>
        </div>
    </div>
  )
}

export default Footer