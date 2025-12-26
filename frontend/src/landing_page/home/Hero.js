import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
          style={{ width: "80%", margin: "auto" }}
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
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
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Hero;
