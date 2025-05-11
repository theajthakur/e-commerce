import React from "react";

export default function Cart({ cartLength, setShowCart }) {
  return (
    <div
      onClick={() => {
        setShowCart((prev) => !prev);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M16 16H20L24 40H48L52 24H28"
          stroke="#ccc"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="26" cy="52" r="3" fill="#ccc" />
        <circle cx="44" cy="52" r="3" fill="#ccc" />
        <circle cx="48" cy="12" r="10" fill="#EF4444" />
        <text
          x="48"
          y="16"
          textAnchor="middle"
          fontSize="12"
          fontFamily="Arial, sans-serif"
          fill="white"
          fontWeight="bold"
        >
          {cartLength}
        </text>
      </svg>
    </div>
  );
}
