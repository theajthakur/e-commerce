import React, { useState } from "react";
import Cart from "../assets/Cart";
import "../style/Navbar.css";
import { CrossIcon, Search, User, User2, X } from "lucide-react";
import { Link, useNavigate } from "react-router";

function Navbar({ cart, setShowCart }) {
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const productNames = [
    "Leather Jacket",
    "Denim Jeans",
    "Floral Maxi Dress",
    "Bluetooth Headphones",
    "Memory Foam Pillow",
    "Running Sneakers",
    "Cotton Hoodie",
    "Aviator Sunglasses",
    "Silk Scarf",
    "Crossbody Bag",
  ];
  const [placeholder, setPlaceholder] = useState(productNames[0]);
  useState(() => {
    setInterval(() => {
      const randomProduct =
        productNames[Math.floor(Math.random() * productNames.length)];
      setPlaceholder(randomProduct);
    }, 3000);
  }, []);
  const navOptions = [
    {
      component: searchVisibility ? (
        <input
          autoFocus={true}
          className="search-form-input animation_ltr"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (!searchTerm) return;
              navigate(`/search/${searchTerm}`);
            }
          }}
        />
      ) : (
        ""
      ),
      title: "Search Field",
    },
    {
      component: searchVisibility ? (
        <X
          color="white"
          onClick={() => {
            setSearchVisibility(!searchVisibility);
          }}
        />
      ) : (
        <Search
          color="white"
          onClick={() => {
            setSearchVisibility(!searchVisibility);
          }}
        />
      ),
      title: "Search Products",
    },
    {
      component: <User2 color="white" />,
      title: "Your Account",
    },
    {
      component: <Cart cartLength={cart.length} setShowCart={setShowCart} />,
      title: "Cart Items",
    },
  ];
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <div className="logo-animate">
          <Link to={"/"}>
            <img src="/assets/images/logo.svg" />
            <span>Treshop</span>
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center navoption-container">
            {navOptions.map((nv, index) => (
              <li
                title={nv.title || ""}
                className={`nav-item ${
                  index > 0 ? "ms-lg-5 ms-2 ms-sm-3" : ""
                }`}
                key={index}
              >
                {nv.component}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
