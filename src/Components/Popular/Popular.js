import React from 'react'
import './Popular.css'
import data_product from '../Assets/data.js'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <div>
        <h1>Popular in Men</h1>
        <hr />
        </div>
        <div className="popular-item">
            {data_product.map((item,index)=>{
                return(
                    <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                )
            })}
        </div>
    </div>
  )
}

export default Popular