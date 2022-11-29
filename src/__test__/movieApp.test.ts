/**
 *@jest-environment jsdom
 */

import * as functionsMovieApp from "../ts/movieApp";
import { test, describe, jest } from "@jest/globals";

// test("should be able to click - handleSubmit", () => {
//   //Arrange
//   let spy = jest.spyOn(functionsMovieApp, "handleSubmit").mockReturnValue();
//   document.body.innerHTML = `<form id="searchForm"><button type="submit" id="search">Sök</button></form>`;

//   //Act
//   functionsMovieApp.init();
//   document.getElementById("search")?.onsubmit;

//   //Assert
//   expect(spy).toHaveBeenCalled();
// });
