import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     fetch('http://localhost:4000/getcart', {
  //       method: "POST",
  //       headers: {
  //         Accept:'application/form-data',
  //         'Content-Type': 'application/json',
  //         'auth-token': `${localStorage.getItem('token')}`,
  //       },
  //       body:""
  //     })
  //       .then((response) =>{
  //         return response.json()
  //       })
  //       .then(result => {
  //         setCartItems(result);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching cart items:', error);
  //       });
  //   }
  // }, []);
  


  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    // if(localStorage.getItem('token')){
    //   let data= fetch('http://localhost:4000/addtocart',{
    //     method:'POST',
    //     headers:{
    //       Accept:'application/form-data',
    //      'Content-Type':'application/json',
    //      'auth-token':`${localStorage.getItem('token')}`,
    //     },
    //     body:JSON.stringify(({"itemId":itemId}))
    //   })
    //   data.then((data)=>{
    //     return data.json()
    //   }).then((result)=>{
    //     console.log(result)
    //   })
    // }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    // if(localStorage.getItem('token')){
    //   let data= fetch('http://localhost:4000/removefromcart',{
    //     method:'POST',
    //     headers:{
    //      'Content-Type':'application/json',
    //      'auth-token':`${localStorage.getItem('token')}`,
    //     },
    //     body:JSON.stringify(({'itemId':itemId}))
    //   })
    //   data.then((data)=>{
    //     return data.json()
    //   }).then((result)=>{
    //     console.log(result)
    //   })
    // }
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (let key in cartItems) {
      if (cartItems[key] > 0) {
        let itemInfo = all_product.find((product) => {
            return product.id === Number(key);
          });
          if (itemInfo) {
            totalAmount += itemInfo.new_price * cartItems[key];
          }
          
      }
    }
    return totalAmount;
  };

  const getTotalCartItems=()=>{
    let totalItem=0
    for(let item in cartItems){
        if(cartItems[item]>0){
            totalItem+=cartItems[item]
        }
    }
    return totalItem
  }
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
