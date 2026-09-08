import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import CartItems from "./components/CartItems";
const dumydata = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    rate: 4.8,
    price: 1200,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
  },
  {
    id: 2,
    title: "Samsung Galaxy S24",
    rate: 4.6,
    price: 1100,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",
  },
  {
    id: 3,
    title: "Nike Air Max",
    rate: 4.5,
    price: 180,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    title: "HP Pavilion Laptop",
    rate: 4.3,
    price: 850,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 5,
    title: "Coffee Maker",
    rate: 4.2,
    price: 95,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },
  {
    id: 6,
    title: "Sony WH-1000XM5 Headphones",
    rate: 4.9,
    price: 399,
    image: "https://images.unsplash.com/photo-1580894908361-967195033215",
  },
  {
    id: 7,
    title: "Apple Watch Series 9",
    rate: 4.7,
    price: 450,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
  },
  {
    id: 8,
    title: "Adidas Hoodie",
    rate: 4.4,
    price: 75,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 9,
    title: "Gaming Mouse RGB",
    rate: 4.6,
    price: 60,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  },
  {
    id: 10,
    title: "Mechanical Keyboard",
    rate: 4.7,
    price: 140,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 11,
    title: "Backpack Travel",
    rate: 4.3,
    price: 55,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 12,
    title: "Smart TV 55 inch",
    rate: 4.5,
    price: 700,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
  },

];

// const initialCartItems = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];

function App() {
  const [product, setProduct] = useState([]);
  const [isloading, setIsloading] = useState(false);
  //////
  // const [cartItems, setCartItems] = useState(initzialCartItems);
  useEffect(() => {
    const getData = async () => {
      setIsloading(true);
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 6000 + 500),
      );
      setProduct(dumydata);
      setIsloading(false);
    };
    getData();
  }, []);
  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // }, [cartItems]);
  return (
    <>
     <h1
  style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    position: "relative",

    fontSize: "clamp(48px, 8vw, 110px)",
    fontWeight: 800,
    letterSpacing: "8px",
    textTransform: "uppercase",

    background: "linear-gradient(90deg, #334155, #0ea5a4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  SHOPPING CART

  {/* Glow خفيف خلف النص */}
  <span
    style={{
      position: "absolute",
      zIndex: -1,
      color: "#0ea5a4",
      filter: "blur(35px)",
      opacity: 0.15,
      userSelect: "none",
    }}
  >
    SHOPPING CART
  </span>

  {/* الخط الأنيق أسفل العنوان */}
  <span
    style={{
      position: "absolute",
      bottom: "25%",
      width: "180px",
      height: "4px",
      borderRadius: "10px",
      background: "linear-gradient(90deg, #0ea5a4, #c4b5fd)",
    }}
  />
</h1>


      {isloading && <p>loading...</p>}
      {/* {!isloading&& product && <p>{JSON.stringify(product)}</p>} */}
      {!isloading && product && (
        // <Products products={dumydata} setCartItems={setCartItems} />
              <Products products={dumydata} />
      )}
      {/* <CartItems cartItems={cartItems} /> */}
            <CartItems  />
    </>
  );
}

export default App;
