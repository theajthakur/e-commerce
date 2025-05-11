import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Carousel from "./components/Carousel";
import "animate.css";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import Footer from "./components/utils/Footer";

export default function App() {
  const [showCart, setShowCart] = useState(false);
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

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
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
      <Navbar cart={cart} setShowCart={setShowCart} />
      <div className="body-controller">
        <div className={`main-body-container ${showCart ? "shrinked" : ""}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:product" element={<Products />} />
            <Route
              path="/product/:productId"
              element={<ProductPage cart={cart} setCart={setCart} />}
            />
          </Routes>
        </div>
        <div className={`cart-container ${showCart ? "visible" : ""}`}>
          {showCart ? <Cart cart={cart} setCart={setCart} /> : ""}
        </div>
      </div>
      <Footer />
    </Router>
  );
}
