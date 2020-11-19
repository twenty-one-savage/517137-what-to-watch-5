import {FilmGenres} from "../consts";

export const getFilmsByGenre = (list, genre) => {
  return genre === FilmGenres.ALL_GENRES ? list : list.filter(((el) => {
    return el.genres.find((item) => item === genre);
  }));
};

const getUniqueGenresArray = (films) => {
  return [FilmGenres.ALL_GENRES, ...new Set(films.map((film) => (film.genres)).flat().slice(0, FilmGenres.MAX_COUNT))];
};
