import React from "react";
import "../../style/Loader.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
