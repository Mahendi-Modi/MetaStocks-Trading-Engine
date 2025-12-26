import React from "react";

function Education() {
  return (
    <div className="container p-5">
      <div className="row p-5 ">
        {/* part 1 */}
        <div className="col-6">
          <img
    
            src="media/images/education.svg"
            alt="Education Image"
            style={{ width: "80%", paddingLeft: "3px" }}
          />
        </div>

        {/* part 2 */}
        <div className="col-6 px-4 py-4">
          <h3 className="mb-4 fs-2 mt-3">Free and open market education</h3>
          <p className="pb-2">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ color: "#6C5CE7", textDecoration: "none" }}>
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>

          <p className="pb-2 pt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ color: "#6C5CE7", textDecoration: "none" }}>
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
