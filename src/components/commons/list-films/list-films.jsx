import {connect} from "react-redux";
import FilmCard from "../film-card/film-card";
import {filmsType} from "../../../utils/types";

const ListFilms = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
        <FilmCard key={film.id} film={film}/>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  films: state.filteredFilms
});

ListFilms.propTypes = filmsType;

export {ListFilms};
export default connect(mapStateToProps)(ListFilms);
