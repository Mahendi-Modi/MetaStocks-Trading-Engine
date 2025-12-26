import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-5 ">
          <h3 className="mb-5 fs-2">Trust with confidence</h3>
          <h4 className="fs-5 pb-2">Customer-first always</h4>
          <p className="pb-4 text-muted" style={{ width: "80%" }}>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h4 className="fs-5 pb-2">No spam or gimmicks</h4>
          <p className="pb-4 text-muted" style={{ width: "80%" }}>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h4 className="fs-5 pb-2">The Zerodha universe</h4>
          <p className="pb-4 text-muted" style={{ width: "80%" }}>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs
          </p>
          <h4 className="fs-5 pb-2">Do better with money</h4>
          <p className="pb-4 text-muted" style={{ width: "80%" }}>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 pt-5">
          <img src="media/images/ecosystem.png" style={{ width: "110%" }} />
          <div
            className="
          conatiner text-center pt-3"
          >
            <a
              href=""
              className="mx-5"
              style={{ color: "#6C5CE7", textDecoration: "none" }}
            >
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" style={{ color: "#6C5CE7", textDecoration: "none" }}>
              Try kit demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
