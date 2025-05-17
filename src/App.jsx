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
import Loader from "./components/utils/Loader";
import Settings from "./components/Settings";

export default function App() {
  const [showCart, setShowCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [userAddress, setUserAddress] = useState({});

  useEffect(() => {
    try {
      const cartItems = localStorage.getItem("treshop_cart") || "[]";
      setCart(JSON.parse(cartItems));
    } catch (error) {
      localStorage.setItem("treshop_cart", "[]");
      console.error("Setting Cart Failed!");
    }

    try {
      const addressFetch = localStorage.getItem("treshop_address") || "{}";
      setUserAddress(JSON.parse(addressFetch));
      console.log(addressFetch);
    } catch (error) {
      localStorage.setItem("treshop_address", "{}");
      console.error("Setting Address failed!");
    }
  }, []);

  const isFirstRenderCart = useRef(true);
  const isFirstRenderAddress = useRef(true);

  useEffect(() => {
    if (isFirstRenderCart.current) {
      isFirstRenderCart.current = false;
      return;
    }
    localStorage.setItem("treshop_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (isFirstRenderAddress.current) {
      isFirstRenderAddress.current = false;
      return;
    }
    localStorage.setItem("treshop_address", JSON.stringify(userAddress));
  }, [userAddress]);

  const HomePage = () => (
    <>
      <Carousel />
      <Products />
    </>
  );

  return (
    <Router>
      {isLoading ? <Loader /> : ""}
      <Navbar cart={cart} setShowCart={setShowCart} />
      <div className="body-controller">
        <div className={`main-body-container ${showCart ? "shrinked" : ""}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:product" element={<Products />} />
            <Route
              path="/product/:productId"
              element={
                <ProductPage
                  userAddress={userAddress}
                  cart={cart}
                  setCart={setCart}
                  setIsLoading={setIsLoading}
                />
              }
            />
            <Route
              path="/settings/*"
              element={
                <Settings
                  userAddress={userAddress}
                  setUserAddress={setUserAddress}
                />
              }
            />
          </Routes>
        </div>
        <div className={`cart-container ${showCart ? "visible" : ""}`}>
          {showCart ? (
            <Cart cart={cart} setCart={setCart} setIsLoading={setIsLoading} />
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </Router>
  );
}
