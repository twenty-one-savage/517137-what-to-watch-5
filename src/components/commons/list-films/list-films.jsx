import {connect} from "react-redux";
import FilmCard from "../film-card/film-card";
import {filmsType} from "../../../utils/types";
import {FilmGenres} from "../../../consts";
import {mapStateToProps} from "./list-films.connect";

const getFilmsByGenre = (list, genre) => {
  return genre === FilmGenres.ALL_GENRES ? list : list.filter(((el) => {
    return el.genres.find((item) => item === genre);
  }));
};

const ListFilms = ({films, activeGenre}) => {
  const filteredFilms = getFilmsByGenre(films, activeGenre);
  return (
    <div className="catalog__movies-list">
      {filteredFilms.map((film) => (
        <FilmCard key={film.id} film={film}/>
      ))}
    </div>
  );
};

ListFilms.propTypes = filmsType;

export {ListFilms};
export default connect(mapStateToProps)(ListFilms);
