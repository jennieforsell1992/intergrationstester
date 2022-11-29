import { IMovie } from "./../../models/IMovies";

let mockData: IMovie[] = [
  {
    Title: "Harry Potter",
    imdbID: "08575",
    Type: "typetext",
    Poster: "poster",
    Year: "2017",
  },
  {
    Title: "Harry Potter",
    imdbID: "08575",
    Type: "typetext",
    Poster: "poster",
    Year: "2017",
  },
  {
    Title: "Harry Potter",
    imdbID: "08575",
    Type: "typetext",
    Poster: "poster",
    Year: "2017",
  },
];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(mockData);
  });
};
