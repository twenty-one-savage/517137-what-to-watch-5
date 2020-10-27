import {FilmGenres} from "../../../../../consts";

export const getFilmsByGenre = (list, genre) => {
  return genre === FilmGenres.ALL_GENRES ? list : list.filter(((el) => {
    return el.genres.find((item) => item === genre);
  }));
};
