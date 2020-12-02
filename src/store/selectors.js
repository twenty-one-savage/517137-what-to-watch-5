import {FilmGenres} from "../consts";
import {createSelector} from "reselect";

const getFilms = (state) => state.DATA.films;

export const getFilmsByGenre = (list, genre) => {
  return genre === FilmGenres.ALL_GENRES ? list : list.filter(((el) => {
    return el.genre === genre;
  }));
};

const getUniqueGenresArray = (films) => ([
  FilmGenres.ALL_GENRES, ...new Set(films.map((film) => (film.genre)))
]);

export const getGenres = createSelector(
    [getFilms],
    (films) => (getUniqueGenresArray(films))
);

export const getFavoriteFilms = createSelector(
    [getFilms],
    (films) => films.filter((el) => el[`is_favorite`] === true)
);

