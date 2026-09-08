import React from 'react'

const CartIteme = ({CartItems}) => {
  
  return (
   <div className="product-card" key={CartItems.id}>
          <img
            src={CartItems.image}
            alt={CartItems.title}
            className="product-image"
          />

          <h3 className="product-title">{CartItems.title}</h3>
          <p className="product-rate">⭐ {CartItems.rate}</p>
          <p className="product-price">${CartItems.price}</p>
    
       </div> 
          
  )
}

export default CartIteme
