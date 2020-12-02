import {cinema} from "./cinema";
import * as action from "../../action";
import {FilmGenres} from "../../../consts";

describe(`Cinema Reducer testing`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(cinema(void 0, {})).toEqual({
      activeGenre: FilmGenres.ALL_GENRES,
      isApplicationReady: false
    });
  });

  it(`Reducer set app ready by SET_APPLICATION_READY`, () => {
    expect(cinema({
      isApplicationReady: false,
    }, {
      type: action.ActionType.SET_APPLICATION_READY,
      payload: true,
    })).toEqual({
      isApplicationReady: true
    });
  });

  it(`Reducer change filter by CHANGE_FILTER_BY_GENRE`, () => {
    expect(cinema({
      activeGenre: {},
    }, {
      type: action.ActionType.CHANGE_FILTER_BY_GENRE,
      payload: FilmGenres.ALL_GENRES,
    })).toEqual({
      activeGenre: FilmGenres.ALL_GENRES
    });
  });
});

