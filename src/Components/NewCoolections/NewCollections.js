import React from 'react'
import './Newcollection.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <div>
        <h1>New Collections</h1>
        <hr />
        </div>
        <div className="collections">
            {
                new_collections.map((item,index)=>{
                    return(
                        <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default NewCollections