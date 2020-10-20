import {extend} from "../utils/common";
import {ActionType} from "./action";
import {allFilms} from "../mocks/films";
import {FilmGenres} from "../consts";

const getUniqueGenresArray = (films) => {
  const dirtyFilters = [];
  films.forEach((film) => dirtyFilters.push((film.genres)));
  return [FilmGenres.ALL_GENRES, ...new Set(dirtyFilters.flat())];
};

const genres = getUniqueGenresArray(allFilms);

const initialState = {
  genres,
  activeGenre: FilmGenres.ALL_GENRES,
  films: allFilms
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });
    default:
      return state;
  }
};

export {reducer};
