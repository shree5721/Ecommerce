import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import brand from '../Assets/brand.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const[menu,setMenu]=useState("shop")
    const{getTotalCartItems}=useContext(ShopContext)
    const menuRef=useRef()

    const dropdown_toggle = () => {
        const menuElement = menuRef.current;
        const iconElement = menuRef.current.previousSibling;
    
        menuElement.classList.toggle("nav_menu_visible");
        iconElement.classList.toggle('open');
    };
    
  return (
    <div className='navbar'>

        <div className="nav-logo">
            <img src={brand} alt="Not found" />
            {/* <p></p> */}
        </div>
        <i className="fa-solid fa-bars nav_dropdown" onClick={dropdown_toggle}></i>
        <ul className="nav-menu" ref={menuRef}>
                <li onClick={()=>setMenu("shop")}> <Link to='/'>Shop</Link> {menu==="shop"?<hr/>:null}</li>
                <li onClick={()=>setMenu("men")}> <Link to='/mens'>Men</Link>{menu==="men"?<hr/>:null}</li>
                <li onClick={()=>setMenu("women")}><Link to='/womens'>Women</Link>{menu==="women"?<hr/>:null}</li>
                <li onClick={()=>setMenu("kids")}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:null}</li>
            </ul>

        <div className="nav-login-cart">
            {localStorage.getItem('token')?<button className='login-btn' onClick={()=>{localStorage.removeItem('token');window.location.replace('/login')}}>Logout</button>:<Link to='/login'><button className='login-btn'>Login</button></Link>}
            
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar