import axios from "axios";

export default axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
  headers: {
    "Content-type": "application/json",
  }
});