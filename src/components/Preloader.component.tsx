import React from "react";
import "../styles/Preloader.style.scss";

const Preloader = () => {
  return (
    <div className="loader-wrp">
      <div>
        <div className="dot-loader"></div>
        <div className="dot-loader dot-loader-2"></div>
        <div className="dot-loader dot-loader-3"></div>
      </div>
    </div>
  );
};

export default Preloader;
