import { Star } from "lucide-react";
import React, { useState } from "react";
import "../style/products.css";
export default function Products({ type = "home", search = "" }) {
  const products = [
    {
      name: "AirMax Runner",
      description: "Lightweight running shoes with breathable mesh.",
      rating: 4.5,
      category: "shoes",
      thumbnail: "shoes_1.jpg",
      originalPrice: 4999,
      offeredPrice: 999,
    },
    {
      name: "Urban Kicks",
      description: "Stylish sneakers for daily wear.",
      rating: 4.2,
      category: "shoes",
      thumbnail: "shoes_2.jpg",
      originalPrice: 3999,
      offeredPrice: 1999,
    },
    {
      name: "Trail Blazer",
      description: "Durable hiking shoes with high grip soles.",
      rating: 4.7,
      category: "shoes",
      thumbnail: "shoes_3.jpg",
      originalPrice: 5999,
      offeredPrice: 2999,
    },
    {
      name: "Classic Loafers",
      description: "Comfortable leather loafers for formal events.",
      rating: 4,
      category: "shoes",
      thumbnail: "shoes_4.jpg",
      originalPrice: 4499,
      offeredPrice: 899,
    },
    {
      name: "Eau de Noir",
      description: "A bold and musky fragrance for men.",
      rating: 4.6,
      category: "perfume",
      thumbnail: "perfume_1.jpg",
      originalPrice: 2499,
      offeredPrice: 1249,
    },
    {
      name: "Floral Bliss",
      description: "Sweet floral scent for everyday wear.",
      rating: 4.3,
      category: "perfume",
      thumbnail: "perfume_2.jpg",
      originalPrice: 1899,
      offeredPrice: 399,
    },
    {
      name: "Ocean Breeze",
      description: "Fresh aquatic scent with a citrusy note.",
      rating: 4.1,
      category: "perfume",
      thumbnail: "perfume_3.jpg",
      originalPrice: 2999,
      offeredPrice: 599,
    },
    {
      name: "Mystic Oud",
      description: "Premium oud perfume with long-lasting fragrance.",
      rating: 4.8,
      category: "perfume",
      thumbnail: "perfume_4.jpg",
      originalPrice: 3999,
      offeredPrice: 799,
    },
    {
      name: "Elegant Stilettos",
      description: "High-heel stilettos for glamorous evenings.",
      rating: 4.4,
      category: "heels",
      thumbnail: "heels_1.jpg",
      originalPrice: 2999,
      offeredPrice: 599,
    },
    {
      name: "Velvet Pumps",
      description: "Comfortable pumps in rich velvet finish.",
      rating: 4.2,
      category: "heels",
      thumbnail: "heels_2.jpg",
      originalPrice: 2699,
      offeredPrice: 1349,
    },
    {
      name: "Glitter Glam",
      description: "Sparkly heels perfect for parties.",
      rating: 4.5,
      category: "heels",
      thumbnail: "heels_3.jpg",
      originalPrice: 3499,
      offeredPrice: 699,
    },
    {
      name: "Bold Block Heels",
      description: "Block heels offering comfort and style.",
      rating: 4.3,
      category: "heels",
      thumbnail: "heels_4.jpg",
      originalPrice: 3199,
      offeredPrice: 999,
    },
    {
      name: "Cozy Zip Hoodie",
      description: "Warm fleece hoodie with front zip.",
      rating: 4.6,
      category: "hoodies",
      thumbnail: "hoodies_1.jpg",
      originalPrice: 2999,
      offeredPrice: 599,
    },
    {
      name: "Minimalist Hoodie",
      description: "Plain hoodie for everyday comfort.",
      rating: 4.2,
      category: "hoodies",
      thumbnail: "hoodies_2.jpg",
      originalPrice: 2799,
      offeredPrice: 1399,
    },
    {
      name: "Oversized Fit",
      description: "Trendy oversized hoodie for relaxed fit.",
      rating: 4.4,
      category: "hoodies",
      thumbnail: "hoodies_3.jpg",
      originalPrice: 3199,
      offeredPrice: 479,
    },
    {
      name: "Athletic Hoodie",
      description: "Sporty hoodie with moisture-wicking fabric.",
      rating: 4.1,
      category: "hoodies",
      thumbnail: "hoodies_4.jpg",
      originalPrice: 3299,
      offeredPrice: 1649,
    },
  ];
  const [selectedProducts, setSelectedProducts] = useState(products);
  return (
    <div className="product-container">
      <div className="product-inner container">
        <div className="row">
          {selectedProducts.map((product) => (
            <div className="product-unit col-11 col-sm-6 col-lg-4 my-5">
              <div className="p-2 product-thumbnail">
                <img
                  className="thumbnail"
                  src={`/assets/images/products/${product.thumbnail}`}
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
                  <div className="offered-price"> {product.offeredPrice}</div>
                  <div className="original-price">{product.originalPrice}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
