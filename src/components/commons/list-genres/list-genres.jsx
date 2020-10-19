import {connect} from "react-redux";
import {ActionCreator} from "../../../store/action";

const ListGenres = ({genres, activeGenre, changeActiveFilter, changeFilmList}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) =>
        <li
          key={`genre-${i}`}
          className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ` `}`}
          onClick={(evt) => {
            evt.preventDefault();
            changeActiveFilter(genre);
            changeFilmList(genre);
          }}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  genres: state.genres,
  activeGenre: state.activeGenre
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilter(genreForFilter) {
    dispatch(ActionCreator.changeActiveFilter(genreForFilter));
  },
  changeFilmList(genreForFilter) {
    dispatch(ActionCreator.changeFilmList(genreForFilter));
  }
});

ListGenres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
  activeGenre: PropTypes.string.isRequired,
  changeActiveFilter: PropTypes.func.isRequired,
  changeFilmList: PropTypes.func.isRequired
};

export {ListGenres};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenres);
