import React, { useContext } from "react";
import "./styles/App.style.scss";
import { LazyRoute } from "./utility";
import { ErrorAlert, Footer, Header } from "./components";
import { useAppContext } from "./context/cocktail.context";

function App() {
  const { errorAlert} = useAppContext();
  return (
    <>
      <Header />
      <LazyRoute />
      {errorAlert !== '' && <ErrorAlert message={errorAlert} />}
      <Footer/>
    </>
  );
}

export default App;
