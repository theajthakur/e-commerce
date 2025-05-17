import React, { useEffect, useState } from "react";
import "../style/ProductPage.css";
import products from "../assets/Products.json";
import { Link, useParams } from "react-router";
import {
  CheckCheck,
  Locate,
  ShoppingBag,
  ShoppingCart,
  Star,
} from "lucide-react";
import { loadRazorpay } from "../utils/Razorpay";
export default function ProductPage({
  setCart,
  cart,
  setIsLoading,
  userAddress,
}) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const prod = products.find((p) => p.uniqueID == productId);
    setProduct(prod);
  }, [productId]);
  const handleQuickPurchase = () => {
    loadRazorpay(product.offeredPrice, setIsLoading);
  };
  return (
    <div className="product-showcase-container px-2 px-lg-5 container">
      <div className="main-show">
        {product ? (
          <div className="row">
            <div className="col-lg-4">
              <div className="thumbnail-container p-5 p-lg-0">
                <img src={`/assets/images/products/${product.thumbnail}`} />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="container">
                <div className="product-meta">
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <p>
                    <Star size={15} />
                    <span className="ps-2">
                      {product.rating} out of 78 ratings
                    </span>
                  </p>
                  <p className="discount-container">
                    <span className="p-2 bg-white">
                      {parseInt(
                        (1 - product.offeredPrice / product.originalPrice) * 100
                      )}
                      % Discount
                    </span>
                  </p>
                  <div className="price-container d-flex w-100 gap-3">
                    <h3 className="fw-bold">₹ {product.offeredPrice}</h3>
                    <h5 className="text-muted">
                      <s>₹ {product.originalPrice}</s>
                    </h5>
                  </div>
                  {!userAddress ||
                  !userAddress.name ||
                  !userAddress.locality ||
                  !userAddress.city ||
                  !userAddress.pin ? (
                    <div className="address-error mt-3">
                      <p className="alert alert-info">
                        Please{" "}
                        <Link to={"/settings/address"} className="text-primary">
                          Complete Your Address
                        </Link>{" "}
                        first before placing an order!
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="address-container my-3">
                        <div className="d-flex align-items-center gap-2">
                          <div className="address-icon">
                            <Locate />
                          </div>
                          <div className="address-value">
                            {!userAddress ||
                            !userAddress.locality ||
                            !userAddress.city ||
                            !userAddress.pin ? (
                              <></>
                            ) : (
                              <p className="m-0">
                                {userAddress.locality}, {userAddress.city},{" "}
                                {userAddress.pin}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="shop-btn-container">
                        <div className="inner-btn buy-btn">
                          <button onClick={handleQuickPurchase}>
                            <ShoppingBag /> <span>Buy Now</span>
                          </button>
                        </div>
                        <div className="inner-btn cart-btn">
                          {cart.find((c) => c.uniqueID === product.uniqueID) ? (
                            <button disabled>
                              {" "}
                              <CheckCheck /> <span>Added to Cart</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                setCart((prev) => {
                                  const quantProduct = { ...product };
                                  quantProduct.quantity = 1;
                                  return [...prev, quantProduct];
                                });
                              }}
                            >
                              <ShoppingCart /> <span>Add to Cart</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="alert alert-danger">No Product Found!</div>
        )}
      </div>
    </div>
  );
}
