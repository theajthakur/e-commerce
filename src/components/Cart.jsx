import { LucideShoppingCart, X } from "lucide-react";
import React from "react";

export default function Cart({ cart, setCart, setIsLoading }) {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const bill = { offeredPrice: 0, originalPrice: 0 };
  cart.forEach((c) => {
    bill.offeredPrice += c.offeredPrice;
    bill.originalPrice += c.originalPrice;
  });
  const loadRazorpay = async (amount) => {
    setIsLoading(true);
    const resh = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!resh) {
      alert("Failed to load Razorpay SDK. Are you online?");
      setIsLoading(false);
      return;
    }

    const res = await fetch(
      "https://treshop-backend-0n7w.onrender.com/payment/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      }
    );

    const data = await res.json();

    const options = {
      key: "rzp_test_i31RvOR7u7cW3M",
      amount: data.amount,
      currency: data.currency,
      name: "Treshop",
      description: "Thanks for your purchase from Treshop!",
      order_id: data.id,
      handler: function (response) {
        setCart([]);
        setIsLoading(false);
      },
      theme: {
        color: "#ff8800",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

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
                    <h6 className="m-0">{c.name}</h6>
                    <p className="small m-0">
                      <span className="small">{c.description}</span>
                    </p>
                    <p>{c.offeredPrice}</p>
                  </div>
                  <div className="action-product">
                    <button
                      onClick={() => {
                        setCart((prev) =>
                          prev.filter((p) => p.uniqueID != c.uniqueID)
                        );
                      }}
                    >
                      <X size={15} />
                    </button>
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
                  loadRazorpay(bill.offeredPrice);
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
