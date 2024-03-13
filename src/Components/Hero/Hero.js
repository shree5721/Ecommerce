import React from 'react'
import './Hero.css'
import homeModel from '../Assets/homeModel.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <div>
                <div className="bye-bye-icon">
                    <p>New <br /> Collection <br /> For Everyone</p>
                </div>
                <div className="latest-hero-btn">
                    <button className='latest-btn'>Latest Collection</button>
                </div>
            </div>
        </div>

        <div className="hero-right">
            <img src={homeModel} alt="Not found" />
        </div>
    </div>
  )
}

export default Hero