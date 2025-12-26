import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row p-5 ">
        {/* part 1 */}
        <div className="col-6 px-5">
          <h3 className="mb-5 fs-2">Unbeatable pricing</h3>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ color: "#6C5CE7", textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        {/* part 2 */}
        <div className="col-6 ">
          <div className="row ">
            <div className="col text-center">
              <h1
                style={{
                  color: " #F39C12",
                  fontWeight: "5px",
                  fontSize: "60px",
                }}
              >
                <sup>
                  <i class="fa-solid fa-indian-rupee-sign fs-6"></i>
                </sup>
                <span>0</span>
              </h1>
              <p>Free account opening</p>
            </div>
            <div className="col text-center">
              <h1
                style={{
                  color: " #F39C12",
                  fontWeight: "5px",
                  fontSize: "60px",
                }}
              >
                <sup>
                  <i class="fa-solid fa-indian-rupee-sign fs-6"></i>
                </sup>
                <span>0</span>
              </h1>
              <p> Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col text-center">
              <h1
                style={{
                  color: " #F39C12",
                  fontWeight: "5px",
                  fontSize: "60px",
                }}
              >
                <sup>
                  <i class="fa-solid fa-indian-rupee-sign fs-6"></i>
                </sup>
                <span>20</span>
              </h1>
              <p> Intraday and F&O</p>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
