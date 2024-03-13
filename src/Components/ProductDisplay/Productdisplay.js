import React, { useContext } from "react";
import "./Productdisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const Productdisplay = (props) => {
  const { product } = props;
  const {addToCart}=useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="ratings">
          <i className="fa-solid fa-star" style={{ color: "#eef744" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#eef744" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#eef744" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#eef744" }}></i>
          <i className="fa-regular fa-star" style={{ color: "#eef744" }}></i>
          <span>(886)</span>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-old-price">
            ₹{product.old_price}
          </div>
          <div className="productdisplay-right-new-price">
            ₹{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sint.
          Animi doloribus ab eius reiciendis consequuntur rerum in non modi.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-rigth-sizes">
            <span>S</span>
            <span>m</span>
            <span>L</span>
            <span>XL</span>
            <span>XXL</span>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className="addto-cart-btn">ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category :</span> Women, T-shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default Productdisplay;
