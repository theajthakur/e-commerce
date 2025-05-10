import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Carousel from "./components/Carousel";
import "animate.css";
import Products from "./components/Products";

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

  const HomePage = () => (
    <>
      <Carousel />
      <Products />
    </>
  );

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:product" element={<Products />} />
      </Routes>
    </Router>
  );
}
