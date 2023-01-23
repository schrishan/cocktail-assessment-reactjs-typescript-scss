import React, { useMemo, useState } from "react";
import "../styles/Search.style.scss";
import { ICocktail } from "../types/cocktail.type";
import CocktailService from "../services/cocktail.service";
import { Cocktail, Preloader } from "../components";
import { useAppContext } from "../context/cocktail.context";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const [searchedCocktails, setSearchedCocktails] = useState<ICocktail[]>([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCatergory, setSelectedCatergory] = useState("all");
  const { errorAlert, setErrorAlert, setBreacrumbData } = useAppContext();
  const { state } = useLocation();
  const [searchParam, setSearchParam] = useState(state ? state : "");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const searchCocktails = () => {
    setIsLoading(true);
    CocktailService.serachForCocktail(searchParam)
      .then((res: any) => {
        res.data.drinks &&
          setCategoryList(
            res.data.drinks
              .map((obj: any) => obj.strCategory)
              .filter(
                (itm: any, index: any) =>
                  res.data.drinks
                    .map((obj: any) => obj.strCategory)
                    .indexOf(itm) === index
              )
          );
        setSearchedCocktails(res.data.drinks);
        setErrorAlert("");
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorAlert(`${err}, please try again later.`);
        setIsLoading(false);
      });
  };

  const filterCocktails = (category: string, e: any) => {
    setSelectedCatergory(category);
    const elements = document.querySelectorAll(".filter-itm");
    elements.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  };
  const cocktailsToShow =
    selectedCatergory === "all"
      ? searchedCocktails
      : searchedCocktails?.filter(
          (searchedCocktail) =>
            searchedCocktail.strCategory?.toLowerCase() ===
            selectedCatergory.toLowerCase()
        );

  useMemo(() => {
    searchCocktails();
  }, []);

  const readMoreHandler = () => {
    setBreacrumbData((prevData: any) => ({
      ...prevData,
      link: "/search",
      state: searchParam,
      name: "Search",
    }));
  };

  const onEnterKey =(e:any)=> {
    (e.key === 'Enter') && searchCocktails();
  }

  return (
    <main className="pg-search">
      <section className="top-content-section">
        <div className="container container-sm container-md container-lg container-xl container-xxl m-auto pos-r">
          <h2 className="pg-title">Search your favourite cocktails.</h2>
        </div>
      </section>

      <section className="items-holder container container-sm container-md container-lg container-xl container-xxl m-auto pos-r">
        <section className="search-box pos-r">
          <input
            name="searchValue"
            className="form-control"
            type="text"
            defaultValue={state}
            onKeyDown={(e:any)=>onEnterKey(e)}
            onChange={(e): void => {
              e.target.value.length > 1 && setSearchParam(e.target.value);
            }}
          />
          <span className="search-btn" onClick={searchCocktails}>
            <i className="bi bi-search"></i>
          </span>
          <span className="btn-alert-txt">
            Please enter at least 2 charaters to search.
          </span>
        </section>
        <section className="seached-itms-wrp">
          {isLoading && <Preloader />}
          {searchedCocktails && searchedCocktails?.length > 0 && (
            <>
              {searchedCocktails?.length > 1 && (
                <div className="fillter-wrp">
                  <div
                    className="filter-itm active"
                    onClick={(e: any) => filterCocktails("all", e)}
                  >
                    {"All"}
                  </div>
                  {categoryList.map((cat: string, index: number) => {
                    return (
                      <div
                        className="filter-itm"
                        key={`cat-${index}`}
                        onClick={(e: any) => filterCocktails(cat, e)}
                      >
                        {cat}
                      </div>
                    );
                  })}
                </div>
              )}
              <div className="result-wrp">
                {cocktailsToShow &&
                  cocktailsToShow?.map((cocktail: ICocktail, index: number) => {
                    return (
                      <Cocktail
                        key={`itm-${index}`}
                        dataObj={cocktail}
                        onClicked={readMoreHandler}
                      />
                    );
                  })}
              </div>
            </>
          )}
          {cocktailsToShow === null && errorAlert === "" && (
            <div className="no-result-wrp">
              <h2 className="section-title">No cocktails found for search.</h2>
            </div>
          )}
        </section>
      </section>
    </main>
  );
};

export default Search;
