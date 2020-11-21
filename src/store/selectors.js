import {FilmGenres} from "../consts";

export const getFilmsByGenre = (list, genre) => {
  return genre === FilmGenres.ALL_GENRES ? list : list.filter(((el) => {
    return el.genre === genre;
  }));
};

export const getUniqueGenresArray = (films) => ([
  FilmGenres.ALL_GENRES, ...new Set(films.map((film) => (film.genre)))
]);
