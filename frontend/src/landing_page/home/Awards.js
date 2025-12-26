import React, { useEffect } from "react";

function Awards() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="container">
      <div className="row">

        <div className="col-6 p-5 fade-left">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker Image"
          />
        </div>

        <div className="col-6 p-5 mt-5 fade-right">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million MetaStocks clients contribute to over 18% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row fade-up">
            <div className="col-6">
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
          </div>

          <img
            src="media/images/pressLogos.png"
            alt="Press Logos Image"
            style={{ width: "90%" }}
            className="fade-up"
          />
        </div>

      </div>
    </div>
  );
}

export default Awards;
