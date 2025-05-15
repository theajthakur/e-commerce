import { Minus, Plus } from "lucide-react";
import "../../style/CartQuantity.css";
import { useEffect, useState } from "react";

export default function CartQuantity({ cart, setCart, id }) {
  const [product, setProduct] = useState(cart.find((c) => c.uniqueID == id));
  useEffect(() => {
    if (product.quantity <= 0)
      return setCart((prevCart) =>
        prevCart.filter((item) => item.uniqueID != product.uniqueID)
      );

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.uniqueID === product.uniqueID ? product : item
      )
    );
  }, [product]);

  return (
    <div className="cart-unit-modifier">
      <div className="inner">
        <div
          className="inln quantity-btn"
          onClick={() => {
            setProduct((prev) => {
              const modifyProduct = { ...prev };
              modifyProduct.quantity -= 1;
              return modifyProduct;
            });
          }}
        >
          <Minus />
        </div>
        <div className="inln quantity-display">
          <span>{product.quantity || 1}</span>
        </div>
        <div
          className="inln quantity-btn"
          onClick={() => {
            setProduct((prev) => {
              const modifyProduct = { ...prev };
              modifyProduct.quantity += 1;
              return modifyProduct;
            });
          }}
        >
          <Plus />
        </div>
      </div>
    </div>
  );
}
