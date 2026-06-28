import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="logo-box">
          <span className="logo-text">CK</span>
        </div>
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
}

export default Loader;
