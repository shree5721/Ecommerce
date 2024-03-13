import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import Productdisplay from '../Components/ProductDisplay/Productdisplay'
import RealatedProducts from '../Components/RelatedProducts/RealatedProducts'

const Product = () => {
  const{all_product}=useContext(ShopContext)
  const {productId}=useParams()
  const product=all_product.find((item)=> item.id===Number(productId))
  return (
    <div>
        <Breadcrums product={product}/>
        <Productdisplay  product={product} />
        <RealatedProducts/>
    </div>
  )
}

export default Product