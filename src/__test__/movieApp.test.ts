/**
 *@jest-environment jsdom
 */

import * as functionsMovieApp from "../ts/movieApp";
import { test, describe, jest } from "@jest/globals";
import { IMovie } from "../ts/models/IMovies";
import * as functionsmovieservices from "../ts/services/movieservice";

describe("const init", () => {
  test("should be able to click - handleSubmit", () => {
    //Arrange
    let spy = jest.spyOn(functionsMovieApp, "handleSubmit").mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve();
        })
    );
    document.body.innerHTML = `<form id="searchForm"><button type="submit" id="search">Sök</button></form>`;

    //Act
    functionsMovieApp.init();
    (document.getElementById("searchForm") as HTMLFormElement)?.submit();

    //Assert
    expect(spy).toHaveBeenCalled();
    document.body.innerHTML = "";
  });
});

describe("displayNoResult", () => {
  test("Should create p-tag with a message", () => {
    //Arrange
    document.body.innerHTML = `<div id="movie-container"></div>`;
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;
    //Act
    functionsMovieApp.displayNoResult(container);

    //Assert
    expect(container.innerHTML).toContain("<p>Inga sökresultat att visa</p>");
    document.body.innerHTML = "";
  });
});

// jest.mock("./../ts/services/movieservice.ts");

// describe("handleSubmit", () => {
//   test("should ", () => {
//     //Arrange
//     let container: HTMLDivElement = document.getElementById(
//       "movie-container"
//     ) as HTMLDivElement;
//     // let searchText: HTMLInputElement = document.getElementById(
//     //   "searchText"
//     // ) as HTMLInputElement;
//     let text: string = "hej";
//     document.body.innerHTML = `<div id="movie-container"></div>`;
//     // document.body.innerHTML = `<input type="text" id="searchText" placeholder="Skriv titel här" />`;
//     let movies: IMovie[] = [];
//     functionsmovieService.getData(text);
//     //Act
//     functionsMovieApp.handleSubmit();

//     //Assert
//     expect(movies.length).toBeGreaterThan(0);
//   });
// test("should ", () => {
//   //Arrange
//   let container: HTMLDivElement = document.getElementById(
//     "movie-container"
//   ) as HTMLDivElement;
//   let searchText: HTMLInputElement = document.getElementById(
//     "searchText"
//   ) as HTMLInputElement;
//   let text: string = "hej";
//   document.body.innerHTML = `<div id="movie-container"></div>`;
//   document.body.innerHTML = `<input type="text" id="searchText" placeholder="Skriv titel här" />`;
//   let movies: [] = [];

//   let spy = jest.spyOn(functionsmovieservice, "getData").mockImplementation(
//     () =>
//       new Promise((resolve) => {
//         resolve();
//       })
//   );

//   functionsmovieservice.getData(text);

//   //Act
//   functionsMovieApp.handleSubmit();

//   //Assert
// });
// });

jest.mock("./../ts/services/movieservice.ts");

describe("createHTML", () => {
  test("should ", async () => {
    //Arrange
    document.body.innerHTML = `<div id="movie-container"></div>`;
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    let searchText: string = "hejpådig!";

    let movies: IMovie[] = await functionsmovieservices.getData(searchText);

    //Act
    functionsMovieApp.createHtml(movies, container);
    //Assert
    expect(document.querySelectorAll("div.movie").length).toBe(3);
    expect(document.querySelectorAll("h3").length).toBe(3);
    expect(document.querySelectorAll("img").length).toBe(3);

    document.body.innerHTML = "";
  });
});
