import axios from 'axios';
import http from '../services/http-common';
import { ICocktail, ICocktailDetail } from '../types/cocktail.type';

class CocktailService {
  async getRandomCocktails() {
    let endpoints = [
      'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    ];
    return await axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
  }
  
  async serachForCocktail(searchParam: string) {
    return await http.get<ICocktail>(`/search.php?s=${searchParam}`);
  }

  async getSingleCocktail(id: any) {
    return await http.get<ICocktailDetail>(`lookup.php?i=${id}`);
  }

}
export default new CocktailService;
