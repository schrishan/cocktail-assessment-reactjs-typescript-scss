import React, { useState, useContext, createContext } from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

const AppContext = createContext({} as any);
const AppProvider = ({ children }: AppContextProviderProps) => {
  const [errorAlert, setErrorAlert] = useState("");
  const [breacrumbData, setBreacrumbData] = useState({
    link: "",
    state: "",
    name: "",
  });
  const [favouriteCocktails, setFavouriteCocktails] = useState([]);

  return (
    <AppContext.Provider
      value={{
        errorAlert,
        setErrorAlert,
        favouriteCocktails,
        setFavouriteCocktails,
        breacrumbData,
        setBreacrumbData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
