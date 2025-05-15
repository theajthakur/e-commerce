import { LucideShoppingCart, X } from "lucide-react";
import "../style/Cart.css";
import { loadRazorpay } from "../utils/Razorpay";
import { useNavigate } from "react-router";
import CartQuantity from "./utils/CartQuantity";

export default function Cart({ cart, setCart, setIsLoading }) {
  const navigate = useNavigate();
  const bill = { offeredPrice: 0, originalPrice: 0 };
  cart.forEach((c) => {
    console.log(c);
    bill.offeredPrice += c.offeredPrice * c.quantity;
    bill.originalPrice += c.originalPrice * c.quantity;
  });

  return (
    <div className="cart-items-container h-100">
      <div className="container h-100">
        <h3 className="text-center py-3 border-bottom mb-3">My Cart</h3>
        {cart.length > 0 ? (
          <div className="cart-items-list">
            {cart.map((c, i) => (
              <div className="cart-unit bg-white p-2 mb-2" key={i}>
                <div className="d-flex gap-2 align-items-center">
                  <div className="thumbnail-product">
                    <img
                      src={`/assets/images/products/${c.thumbnail}`}
                      alt="product thumb"
                      width={50}
                    />
                  </div>
                  <div className="detail-product w-100">
                    <h6
                      className="m-0"
                      onClick={() => {
                        navigate(`/product/${c.uniqueID}`);
                      }}
                    >
                      {c.name}
                    </h6>
                    <p className="small m-0">
                      <span className="small">{c.description}</span>
                    </p>
                    <p>{c.offeredPrice}</p>
                  </div>
                  <div className="cart-quantity">
                    <CartQuantity
                      cart={cart}
                      setCart={setCart}
                      id={c.uniqueID}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="bill-calculator">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>Original Price: </td>
                    <td>{bill?.originalPrice?.toFixed(2) || 0.0}</td>
                  </tr>
                  <tr>
                    <td>Discount: </td>
                    <td>
                      {(bill?.originalPrice - bill?.offeredPrice)?.toFixed(2) ||
                        0.0}
                    </td>
                  </tr>
                  <tr>
                    <td>Offered Price: </td>
                    <td>
                      <b>{bill?.offeredPrice?.toFixed(2) || 0.0}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                className="w-100 btn btn-lg btn-warning"
                onClick={() => {
                  loadRazorpay(bill.offeredPrice, setIsLoading, setCart);
                }}
              >
                Purchase Now
              </button>
            </div>
          </div>
        ) : (
          <div className="d-flex h-100 justify-content-center align-items-center">
            <div className="text-center">
              <LucideShoppingCart size={100} color="gray" />
              <p className="lead">Your Cart is Empty!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
