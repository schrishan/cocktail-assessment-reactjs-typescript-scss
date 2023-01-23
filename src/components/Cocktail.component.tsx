import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/cocktail.context";
import "../styles/Cocktail.style.scss";
import { ICocktail } from "../types/cocktail.type";
import { stringConvert } from "../utility";

interface Props {
  dataObj: ICocktail;
  onClicked?: any;
  indexVal?:number
}

const Cocktail = ({ dataObj, onClicked, indexVal }: Props) => {
  const { favouriteCocktails, setFavouriteCocktails } = useAppContext();

  const addToFavourite = () => {
    setFavouriteCocktails((prevData: any) => [...prevData, dataObj]);
  };

  const isFavourite = favouriteCocktails.some((favourite: any) => {
    if (favourite.idDrink === dataObj.idDrink) {
      return true;
    }
    return false;
  });
  const removeFavourite = () => {
    setFavouriteCocktails((prevData: any) =>
      prevData.filter(
        (favouriteCocktails: any) =>
          favouriteCocktails.idDrink !== dataObj.idDrink
      )
    );
  };
  return (
    <div
      className={`cocktail-itm pos-r active ${stringConvert(dataObj.strCategory)}`}
    >
      <div className="itm-img-wrp"><img src={dataObj.strDrinkThumb} alt={dataObj.strDrink} /></div>
      <div className="itm-crad-detail">
      <h2>{dataObj.strDrink}</h2>
      <p>{dataObj.strCategory}</p>
      <Link
        className="btn"
        to={`/cocktail/${dataObj.idDrink}`}
        onClick={onClicked}
      >
        Read more <i className="bi bi-arrow-right"></i>
      </Link>
      </div>
        <div className="btn-icon-wrp">
            {!isFavourite && (
                <span className="add-to-fav-btn" onClick={() => addToFavourite()}>
                <i className="bi bi-heart"></i>
                </span>
            )}
            {isFavourite && (
                <>
                <span className="fav-btn"><i className="bi bi-heart-fill"></i></span>
                <span className="remove-fav-btn" onClick={() => removeFavourite()}>
                <i className="bi bi-trash3"></i>
                </span>
                </>
            )}
        </div>
    </div>
  );
};

export default Cocktail;
