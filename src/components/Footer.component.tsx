import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.style.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="copyright-area container container-sm container-md container-lg container-xl container-xxl m-auto pos-r">
        <div className="copyright-text">
          <p>
            Copyright &copy; 2023, All Right Reserved <a href="#">Sadith</a>
          </p>
        </div>
        <div className="footer-menu">
          <span className="nav-itm">
            <Link to="/">Home</Link>
          </span>
          <span className="nav-itm">
            <Link to="/search">Search</Link>
          </span>
          <span className="nav-itm">
            <Link to="/favourites">Favourites</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
