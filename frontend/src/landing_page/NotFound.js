import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center p-5">
      <img
        src="media/images/404.png"
        alt="Page Not Found"
        style={{ width: "350px" }}
      />
      <p className="text-muted fs-5">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link to="/">
        <button
          style={{
            width: "25%",
            backgroundColor: "#6C5CE7",
            color: "white",
            borderRadius: "5px",
            border: "none",
          }}
          className="click-btn p-2 fs-5 mt-3"
        >
          Go to Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
