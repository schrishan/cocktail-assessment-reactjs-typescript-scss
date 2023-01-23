import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Favourites.style.scss";
import { Cocktail } from "../components";
import { useAppContext } from "../context/cocktail.context";

const Favourites = () => {
  const { state } = useLocation();
  const { setBreacrumbData, favouriteCocktails, setFavouriteCocktails } =
    useAppContext();
  const readMoreHandler = () => {
    setBreacrumbData((prevData: any) => ({
      ...prevData,
      link: "/favourites",
      state: "",
      name: "Favourites",
    }));
  };

  return (
    <main className="pg-favourites">
      <section className="top-content-section">
        <div className="container container-sm container-md container-lg container-xl container-xxl m-auto pos-r">
          <h2 className="pg-title">My Favourites</h2>
        </div>
      </section>

      <section className="items-holder container container-sm container-md container-lg container-xl container-xxl m-auto pos-r">
        <div className="result-wrp">
        {favouriteCocktails.map((cocktail: any, index: number) => {
          return (
            <Cocktail
              key={`itm-${index}`}
              dataObj={cocktail}
              onClicked={readMoreHandler}
            />
          );
        })}
        </div>
        {favouriteCocktails.length === 0 && <div className="emty-favourites-wrp">
          <div className="empty-icon">
            <svg
              fill="#9A9A9A"
              height="100px"
              width="100px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 470 470"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M206.319,198.21c1.475,1.95,3.717,2.976,5.987,2.976c1.576,0,3.166-0.495,4.519-1.52c3.303-2.499,3.956-7.203,1.456-10.506
		l-72.102-95.302c-6.503-8.595-9.94-18.849-9.94-29.655c0-27.131,22.073-49.204,49.204-49.204c26.864,0,48.719,21.855,48.719,48.719
		c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5c0-9.431-2.076-18.381-5.768-26.441C252.447,23.453,267.91,15,284.557,15
		c27.131,0,49.204,22.073,49.204,49.204c0,10.806-3.438,21.06-9.94,29.655l-72.105,95.305c-2.5,3.303-1.847,8.007,1.456,10.506
		c1.354,1.024,2.943,1.52,4.519,1.52c2.27,0,4.512-1.026,5.987-2.976l72.105-95.304c8.491-11.222,12.979-24.606,12.979-38.706
		C348.761,28.802,319.959,0,284.557,0c-19.423,0-37.605,8.817-49.681,23.571C223.183,9.201,205.37,0,185.442,0
		c-35.402,0-64.204,28.802-64.204,64.204c0,14.1,4.488,27.484,12.979,38.705L206.319,198.21z"
                />
                <path
                  d="M433.285,289.565l-40-69.613c-1.338-2.328-3.818-3.763-6.503-3.763H83.218c-2.685,0-5.165,1.436-6.503,3.763l-40,69.613
		c-1.333,2.321-1.329,5.177,0.012,7.494c1.341,2.316,3.814,3.743,6.491,3.743H195c2.685,0,5.165-1.436,6.503-3.763l25.997-45.244
		V455H90.718V323.302c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5V462.5c0,4.142,3.358,7.5,7.5,7.5h303.564
		c4.142,0,7.5-3.358,7.5-7.5V300.802h32.5c2.677,0,5.15-1.427,6.491-3.743C434.614,294.742,434.619,291.886,433.285,289.565z
		 M190.66,285.802H56.177l31.381-54.613h134.482L190.66,285.802z M379.282,455H242.5V251.795l25.997,45.244
		c1.338,2.328,3.818,3.763,6.503,3.763h104.282V455z M279.34,285.802l-31.381-54.613h134.482l31.381,54.613H279.34z"
                />
              </g>
            </svg>
          </div>
          <h4>Your favourites list is empty!</h4>
          <p>Explore cocktails and add them to favourites to show them here.</p>
          <span className="explore-btn">
            <Link to="/search">Explore cocktails</Link>
          </span>
        </div>}
      </section>
    </main>
  );
};
export default Favourites;
