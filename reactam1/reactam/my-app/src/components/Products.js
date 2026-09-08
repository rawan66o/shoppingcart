import React from "react";
import "./Products.css";
import Product from "./Product";

const Products = ({ products,setCartItems }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        // <div className="product-card" key={product.id}>
        //   <img
        //     src={product.image}
        //     alt={product.title}
        //     className="product-image"
        //   />

        //   <h3 className="product-title">{product.title}</h3>
        //   <p className="product-rate">⭐ {product.rate}</p>
        //   <p className="product-price">${product.price}</p>
        // </div>
        <Product key={product.id} product={product} setCartItems={setCartItems}/>
      ))}
    </div>
  );
};

export default Products;
