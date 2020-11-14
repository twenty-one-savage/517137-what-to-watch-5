import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import {allFilms} from "../../../mocks/films";
import {FilmGenres} from "../../../consts";

const getUniqueGenresArray = (films) => {
  return [FilmGenres.ALL_GENRES, ...new Set(films.map((film) => (film.genres)).flat().slice(0, FilmGenres.MAX_COUNT))];
};

const genres = getUniqueGenresArray(allFilms);

const initialState = {
  films: allFilms,
  genres,
  activeGenre: FilmGenres.ALL_GENRES
};

const cinemaProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });
    default:
      return state;
  }
};

export {cinemaProcess};
