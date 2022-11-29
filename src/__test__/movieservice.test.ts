import * as functionsmovieservice from "../ts/services/movieservice";
import { getData } from "../ts/services/movieservice";
import { test, describe, jest } from "@jest/globals";
import { IMovie } from "../ts/models/IMovies";

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

jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => {
      resolve({ data: { Search: mockData, totalResults: "4201" } });
    });
  },
}));

describe("const getData and mockdata", () => {
  test("Should get data from axios", async () => {
    //Arrange
    let textMovie: string = "filmer";
    //Act
    let movieInfo: IMovie[] = await getData(textMovie);
    //Assert

    expect(movieInfo.length).toBe(3);
    expect(movieInfo[0].Title).toBe("Harry Potter");
    expect(movieInfo[2].Year).toBe("2017");
  });
  //   test("Should get a empty array", async () => {
  //     //Arrange
  //     let movieText: [] = [];
  //     let textInfo: string = "hej";
  //     //Act
  //     let movieInfo = await getData(textInfo);
  //     //Assert

  //     expect(movieInfo.length).toBe(movieText);
  //     // expect(movieInfo[0].Title).toBe("Harry Potter");
  //     // expect(movieInfo[2].Year).toBe("2017");
  //   });
});
