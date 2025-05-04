import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Carousel from "./components/Carousel";
import "animate.css";

export default function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    try {
      const cartItems = localStorage.getItem("treshop_cart") || "[]";
      setCart(JSON.parse(cartItems));
    } catch (error) {
      localStorage.setItem("treshop_cart", "[]");
      console.error("Something went wrong!");
    }
  }, []);

  return (
    <div>
      <Navbar cart={cart} />
      <Carousel />
    </div>
  );
}
