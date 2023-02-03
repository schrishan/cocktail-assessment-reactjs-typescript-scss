import React from "react";
import { Link } from "react-router-dom";
import '../styles/NotFound.style.scss';

const NotFound = () => {
    return(
        <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>4<span>0</span>4</h1>
          </div>
          <h2>Oops! Page Not Be Found</h2>
          <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
          <Link to="/">Back to homepag</Link>
        </div>
      </div>
    )
}
export default NotFound;    