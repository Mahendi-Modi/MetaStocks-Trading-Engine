import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          style={{
            width: "25%",
            margin: "auto",
            backgroundColor: "#6C5CE7",
            color: "white",
            borderRadius: "5px",
            border: "none",
          }}
          className="click-btn p-2 fs-5 mb-5"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
