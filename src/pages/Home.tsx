import React, { useMemo, useState } from "react";
import "../styles/Home.style.scss";
import CocktailService from "../services/cocktail.service";
import { ICocktail } from "../types/cocktail.type";
import { Cocktail, Preloader} from "../components";
import { useAppContext } from "../context/cocktail.context";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [randomCocktails, setRandomCocktails] = useState<ICocktail[]>([]);
  const {setErrorAlert, setBreacrumbData, favouriteCocktails } = useAppContext();
  const [searchParam, setSearchParam] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loadRandomCocktails = () => {
    setIsLoading(true);
    CocktailService.getRandomCocktails()
      .then((res: any) => {
        setRandomCocktails(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorAlert(`${err}, please try again later.`);
        setRandomCocktails([]);
        setIsLoading(false);
      });
  };

  const refreashRandomList = () => {
    setRandomCocktails([]);
    loadRandomCocktails();
  };

  useMemo(() => {
    loadRandomCocktails();
  }, []);

  const readMoreHandler = () => {
    setBreacrumbData((prevData: any) => ({
      ...prevData,
      link: "/home",
      state: "",
      name: "Home",
    }));
  };

  const onEnterKey =(e:any)=> {
    (e.key === 'Enter') && navigate('/search', { state:searchParam });
  }

  return (
    <main className="pg-home"> 
    <section className="top-hero-section">
    <div className="hero-content container container-sm container-md container-lg container-xl container-xxl m-auto pos-r">
      <h2 className="pg-title">5-star cocktails in the hub.</h2>
      <h4 className="pg-desc">Simple steps to make sophisticated cocktails.
        Free to join, no commitments.
      </h4>
      <div className="search-box pos-r">
      <input
        name="searchValue" className="form-control" onKeyDown={(e:any)=>onEnterKey(e)}
        onChange={(e): void => setSearchParam(e.target.value)}
      />
      <span className="search-btn"><Link to="/search" state={searchParam}>
      <i className="bi bi-search"></i>
      </Link></span>
      </div>
    </div>
    <span className="hero-overlay"></span>
    </section>
    <section className="section-items-holder container container-sm container-md container-lg container-xl container-xxl m-auto pos-r">
      <div className="section-title-wrp">
        <h3>Random cocktails</h3>
      <span onClick={refreashRandomList}>Refresh again <i className="bi bi-arrow-clockwise"></i></span>
      </div>
      <div className="random-itm-wrp">
        {isLoading && <Preloader />}
        {randomCocktails.length > 4 && (
          <>
            {randomCocktails.map((cocktail: any, index: number) => {
              return (
                <Cocktail
                  key={`itm-${index}`}
                  dataObj={cocktail.data.drinks[0]}
                  onClicked={readMoreHandler}
                />
              );
            })}
          </>
        )}
        </div>
      </section>
      <section className="section-items-holder container container-sm container-md container-lg container-xl container-xxl m-auto pos-r">
      <div className="section-title-wrp">
        <h3>My favourites cocktails</h3>
      <span><Link to="/favourites">View more <i className="bi bi-arrow-right"></i></Link></span>
      </div>
      <div className={`my-favourites-itm-wrp ${favouriteCocktails.length === 0 ? 'no-itms':''}`}>
        {isLoading && <Preloader />}
            {favouriteCocktails && favouriteCocktails.slice(0, 5).map((cocktail: any, index: number) => {
              return (
                <Cocktail
                  key={`itm-${index}`}
                  dataObj={cocktail}
                  onClicked={readMoreHandler}
                />
              );
            })}
            {favouriteCocktails.length === 0 && <h3>Favourite cocktails are not available.</h3>}
        </div>
      </section>
    </main>
  );
};
export default Home;
