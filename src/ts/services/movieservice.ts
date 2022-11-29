import { IOmdbResponse } from "./../models/IOmdbResponse";
import { IMovie } from "../models/IMovies";
import axios from "axios";

export const getData = async (searchText: string): Promise<IMovie[]> => {
  return axios
    .get<IOmdbResponse>("http://omdbapi.com/?apikey=416ed51a&s=" + searchText)
    .then((data) => {
      return data.data.Search;
    })
    .catch(() => {
      return [];
    });
};

//Vad är catch?
//betyder det att det om mitt promise blir rejected skickas istället en
//tom lista?
