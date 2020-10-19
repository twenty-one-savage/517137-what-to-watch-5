import {allFilms} from "../mocks/films";
import {FilmGenres} from "../consts";

const getFilmsByGenre = (list, genre) => {
  return genre === FilmGenres.ALL_GENRES ? list : list.filter(((el) => {
    return el.genres.find((item) => item === genre);
  }));
};

const getUniqueGenresArray = (films) => {
  const dirtyFilters = [];
  films.forEach((film) => dirtyFilters.push((film.genres)));
  return [FilmGenres.ALL_GENRES, ...new Set(dirtyFilters.flat())];
};

const genres = getUniqueGenresArray(allFilms);

export {genres, getFilmsByGenre};
