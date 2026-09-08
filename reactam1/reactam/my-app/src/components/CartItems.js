// import React from 'react'
// import CartIteme from './CartIteme'

// const CartItems = ({cartItems}) => {
//   return (
//     <div>
//       <h1>cart {cartItems.length}</h1>
//       <ul>
//      {cartItems.map((item)=>(
//         <CartIteme key={item.id} CartItems={item}/>
//      ))}
//       </ul>
//     </div>
//   )
// }

// export default CartItems
//////////////context
import React, { useContext } from 'react'
import CartIteme from './CartIteme'
import { ShoppingCartContext } from '../context/ShoppingCartContext'

const CartItems = ({}) => {
  const{cartItems}=useContext(ShoppingCartContext)
  return (
    <div>
      
      <h1>cart {cartItems.length}</h1>
      <ul>
     {cartItems.map((item)=>(
        <CartIteme key={item.id} CartItems={item}/>
     ))}
      </ul>
    </div>
  )
}

export default CartItems
