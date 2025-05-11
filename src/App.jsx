import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Carousel from "./components/Carousel";
import "animate.css";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";

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

  useEffect(() => {
    if (cart.length == 0) return;
    localStorage.setItem("treshop_cart", JSON.stringify(cart));
  }, [cart]);

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
        <Route
          path="/product/:productId"
          element={<ProductPage setCart={setCart} />}
        />
      </Routes>
    </Router>
  );
}
