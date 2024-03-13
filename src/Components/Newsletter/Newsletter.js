import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get The Latest Offers On Your Email</h1>
        <p>Subscribe and get notified about latest offers</p>
        <div>
            <input type="email" placeholder='email' />
            <button>Subscibe</button>
        </div>
    </div>
  )
}

export default Newsletter