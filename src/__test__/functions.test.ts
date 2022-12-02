import * as functions from "../ts/functions";
import { test, describe, jest } from "@jest/globals";
import { IMovie } from "../ts/models/IMovies";

describe("movieSort", () => {
  test("should sort list - alphabet ", () => {
    //Arrange
    let movies: IMovie[] = [
      {
        Title: "Harry Potter",
        imdbID: "08575",
        Type: "typetext",
        Poster: "poster",
        Year: "2017",
      },
      {
        Title: "Pelle svanslös",
        imdbID: "08575",
        Type: "typetext",
        Poster: "poster",
        Year: "2017",
      },
      {
        Title: "Greveholm",
        imdbID: "08575",
        Type: "typetext",
        Poster: "poster",
        Year: "2017",
      },
    ];

    //Act
    functions.movieSort(movies);
    //Assert
    expect(movies[0].Title).toEqual("Greveholm");
    expect(movies[2].Title).toEqual("Pelle svanslös");
  });

  test("should not sort list", () => {
    //Arrange
    let movies: IMovie[] = [
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
        Year: "2010",
      },
      {
        Title: "Harry Potter",
        imdbID: "08575",
        Type: "typetext",
        Poster: "poster",
        Year: "2003",
      },
    ];
    //Act
    functions.movieSort(movies);

    //Assert
    expect(movies[0].Year).toEqual("2017");
    expect(movies[1].Year).toEqual("2010");
    expect(movies[2].Year).toEqual("2003");
    console.log(movies);
  });
  test("should sort list reverse", () => {
    //Arrange
    let movies: IMovie[] = [
      {
        Title: "Harry Potter",
        imdbID: "08575",
        Type: "typetext",
        Poster: "poster",
        Year: "2017",
      },
      {
        Title: "pelle svanslös",
        imdbID: "08575",
        Type: "typetext",
        Poster: "poster",
        Year: "2010",
      },
      {
        Title: "Greveholm",
        imdbID: "08575",
        Type: "typetext",
        Poster: "poster",
        Year: "2003",
      },
      {
        Title: "Greveholm",
        imdbID: "08575",
        Type: "typetext",
        Poster: "poster",
        Year: "2003",
      },
    ];
    //Act
    functions.movieSort(movies, false);
    //Assert
    expect(movies[0].Title).toEqual("pelle svanslös");
  });

  test("should test return 0", () => {
    //Arrange
    let movies: IMovie[] = [
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
        Year: "2010",
      },
      {
        Title: "Harry Potter",
        imdbID: "08575",
        Type: "typetext",
        Poster: "poster",
        Year: "2003",
      },
    ];
    //Act
    functions.movieSort(movies, false);
    //Assert
    expect(movies[0].Title).toEqual("Harry Potter");
  });
});
