import React, { useMemo, useState } from "react";
import "../styles/CocktailDetail.style.scss";
import CocktailService from "../services/cocktail.service";
import { ICocktailDetail } from "../types/cocktail.type";
import { useAppContext } from "../context/cocktail.context";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Breacrumb, Preloader } from "../components";

const CocktailDetail = () => {
  const [itmDetail, setItmDEtail] = useState<ICocktailDetail[]>([]);
  const { setErrorAlert,breacrumbData} = useAppContext();
  const { itmId } = useParams<{ itmId?: string }>();
  const [isLoading, setIsLoading] = useState(true);

  const loadCocktailDetail = () => {
    CocktailService.getSingleCocktail(itmId)
      .then((res: any) => {
        setItmDEtail(res.data.drinks);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorAlert(`${err}, please try again later.`);
        setItmDEtail([]);
        setIsLoading(false);
      });
  };
  useMemo(() => {
    loadCocktailDetail();
  }, []);
  return (
    <div>
      {isLoading && <Preloader />}
      {itmDetail &&
        itmDetail.map((itm: ICocktailDetail, index: number) => {
          return (
            <main className="pg-cocktail-detail">
            <section className="top-content-section">
              <div className="container container-sm container-md container-lg container-xl container-xxl m-auto pos-r">
              <Breacrumb
                link={breacrumbData.link}
                state={breacrumbData.state}
                name={breacrumbData.name}
                itmTitle={itm.strDrink}
              />
                <h2 className="itm-detail-title">{itm.strDrink}</h2>
                <div className="itm-img"><img src={itm.strDrinkThumb} alt={itm.strDrink}  /></div>
                <div className="itm-detail">
                  <p><b>Category</b><br/>{itm.strCategory}</p>
                  <p><b>Glass</b><br/>{itm.strGlass}</p>
                  <p><b>Instructions</b><br/>{itm.strInstructions}</p>
                  <p><b>Ingredient</b><br/>{itm.strIngredient1 && <>{itm.strIngredient1}</>}{itm.strIngredient2 && <> / {itm.strIngredient2}</>}{itm.strIngredient3 && <> / {itm.strIngredient3}</>}{itm.strIngredient4 && <> / {itm.strIngredient4}</>}{itm.strIngredient5 && <> / {itm.strIngredient5}</>}</p>
                  <p><b>Measure</b><br/>{itm.strMeasure1 && <>{itm.strMeasure1}</>}{itm.strMeasure2 && <> / {itm.strMeasure2}</>}{itm.strMeasure3 && <> / {itm.strMeasure3}</>}{itm.strMeasure4 && <> / {itm.strMeasure4}</>}{itm.strMeasure5 && <> / {itm.strMeasure5}</>}</p>
                </div>
              </div>
            </section>
            </main>
          );
        })}
    </div>
  );
};

export default CocktailDetail;
