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

describe("handleSubmit", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  jest.mock("axios", () => ({
    get: async () => {
      return new Promise((reject) => {
        reject({
          data: [],
        });
      });
    },
  }));

  test("should call createHtml", async () => {
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" value="star" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
    </form> <div id="movie-container"></div>`;
    let spy = jest.spyOn(functionsMovieApp, "createHtml").mockReturnValue();

    //Act
    await functionsMovieApp.handleSubmit();

    expect(spy).toHaveBeenCalled();
    document.body.innerHTML = "";
  });

  test("should call displayNoResult", async () => {
    //arrange
    document.body.innerHTML = `<form id="searchForm">
    <input type="text" id="searchText" value="star" placeholder="Skriv titel här" />
    <button type="submit" id="search">Sök</button>
  </form>
  <div id="movie-container"></div>`;
    let searchText = (document.getElementById("searchText") as HTMLInputElement)
      .value;
    searchText = "";
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;

    let dataSpy = jest
      .spyOn(functionsmovieservices, "getData")
      .mockImplementation(
        () =>
          new Promise((reject) => {
            reject([]);
          })
      );

    let spy = jest
      .spyOn(functionsMovieApp, "displayNoResult")
      .mockReturnValue();

    //act
    await functionsMovieApp.handleSubmit();

    // expect(spy).toHaveReturnedWith([]);
    // if (dataSpy) {
    //assert
    expect(dataSpy).toHaveBeenCalled();
    expect(spy).toBeCalledWith(container);
    expect(functionsmovieservices.getData).toHaveBeenCalledTimes(1);
    document.body.innerHTML = "";
  });
});
