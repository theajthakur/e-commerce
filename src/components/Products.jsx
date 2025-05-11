import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import "../style/products.css";
import { Link, useParams } from "react-router-dom";

import products from "../assets/Products.json";

export default function Products() {
  const { product } = useParams();
  const [selectedProducts, setSelectedProducts] = useState(products);

  useEffect(() => {
    if (product) {
      const filtered = products.filter(
        (sp) =>
          sp.name?.toLowerCase().includes(product.toLowerCase()) ||
          sp.description?.toLowerCase().includes(product.toLowerCase())
      );
      setSelectedProducts(filtered);
    } else {
      setSelectedProducts(products);
    }
  }, [product]);

  return (
    <div className="product-container">
      <div className="product-inner container">
        <div className="row justify-content-center">
          {selectedProducts.map((product, index) => (
            <div
              className="product-unit col-11 col-sm-6 col-lg-4 my-5"
              key={index}
            >
              <Link to={`/product/${product.uniqueID}`}>
                <div className="product-unit-inner">
                  <div className="p-2 product-thumbnail">
                    <img
                      className="thumbnail"
                      src={`/assets/images/products/${product.thumbnail}`}
                      alt={product.name}
                    />
                    <div className="product-rating">
                      <div className="star-icon">
                        <Star size={15} />
                        <span className="rating-value">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-detail">
                    <div className="title">{product.name}</div>
                    <div className="description">{product.description}</div>
                    <div className="product-pricing">
                      <div className="offered-price">
                        ₹ {product.offeredPrice}
                      </div>
                      <div className="original-price">
                        ₹{product.originalPrice}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
