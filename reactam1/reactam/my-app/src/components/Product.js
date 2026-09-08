import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

const Product = ({ product}) => {
  const { setCartItems } = useContext(ShoppingCartContext);

  const handleClick = () => {
    toast("تم اضافة المنتج بنجاح");

    setCartItems(prev => [...prev, product]);
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <h3 className="product-title">{product.title}</h3>
      <p className="product-rate">⭐ {product.rate}</p>
      <p className="product-price">${product.price}</p>

      <button type='button' onClick={handleClick}>
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
