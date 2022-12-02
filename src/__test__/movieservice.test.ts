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
  get: async (searchText: string) => {
    return new Promise((resolve) => {
      resolve({ data: { Search: mockData, totalResults: "4201" } });
    });
  },
}));

describe("const getData and mockdata", () => {
  test("Should get data from axios", async () => {
    //Arrange
    let searchText: string = "filmer";
    //Act
    let movieInfo: IMovie[] = await getData(searchText);
    //Assert

    expect(movieInfo.length).toBe(3);
    expect(movieInfo[0].Title).toBe("Harry Potter");
    expect(movieInfo[2].Year).toBe("2017");
  });
  //   test("Should get return a empty array", async () => {
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

  // test("should reject data", async () => {
  //   jest.mock("axios", () => ({
  //     get: async () => {
  //       return new Promise((reject) => {
  //         reject({ data: [] });
  //       });
  //     },
  //   }));
  //   //Arrange
  //   let text: string = "";
  //   let movieInfos: IMovie[] = [];
  //   //Act
  //   try {
  //     movieInfos = await getData(text);
  //   } catch (error: any) {
  //     //Assert
  //     expect(error.data).toBe([]);
  //   }
  // });
});
