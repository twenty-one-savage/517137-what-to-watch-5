import {extend} from "../utils/common";
import {ActionType} from "./action";
import {getFilmsByGenre, genres} from "../utils/films";
import {allFilms} from "../mocks/films";
import {FilmGenres} from "../consts";

const initialState = {
  genres,
  activeGenre: FilmGenres.ALL_GENRES,
  filteredFilms: allFilms
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });
    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, {
        filteredFilms: getFilmsByGenre(allFilms, action.payload)
      });
    default:
      return state;
  }
};

export {reducer};
