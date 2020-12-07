import {connect} from "react-redux";
import {changeActiveFilter} from "../../../../store/action";
import ListGenres from "./list-genres";
import {getFilmsByGenre, getGenres} from "../../../../store/selectors";

const mapStateToProps = (state) => ({
  genres: getGenres(state),
  activeGenre: state.CINEMA.activeGenre,
  films: getFilmsByGenre(state.DATA.films, state.CINEMA.activeGenre)
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilter(genreForFilter) {
    dispatch(changeActiveFilter(genreForFilter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListGenres);

