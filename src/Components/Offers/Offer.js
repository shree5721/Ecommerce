import React from 'react'
import './Offer.css'
import exclusive_image from '../Assets/offersBanner.png'

const Offer = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>On The Best Selling Products</p>
            <button>Check it now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="Not found" />
        </div>
    </div>
  )
}

export default Offer