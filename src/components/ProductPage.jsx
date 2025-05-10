import React, { useEffect, useState } from "react";
import products from "../assets/Products.json";
import { useParams } from "react-router";
import { ShoppingBag, ShoppingCart, Star } from "lucide-react";
export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const prod = products.find((p) => p.uniqueID == productId);
    setProduct(prod);
    console.log(prod);
  }, [productId]);
  return (
    <div className="product-showcase-container">
      <div className="main-show mt-5">
        {product ? (
          <div className="row">
            <div className="col-sm-4">
              <div className="thumbnail-container">
                <img
                  src={`/assets/images/products/${product.thumbnail}`}
                  width={"100%"}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="product-meta">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>
                  <Star size={15} />
                  <span className="ps-2">
                    {product.rating} out of 78 ratings
                  </span>
                </p>
                <h3 className="fw-bold">₹ {product.offeredPrice}</h3>
                <div className="button0hub mt-3">
                  <button className="btn btn-success">
                    <ShoppingBag /> BUY NOW
                  </button>
                  <button className="btn btn-info ms-2">
                    <ShoppingCart /> Add to Cart
                  </button>
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
