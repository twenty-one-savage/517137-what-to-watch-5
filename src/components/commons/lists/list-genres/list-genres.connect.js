import {connect} from "react-redux";
import {changeActiveFilter} from "../../../../store/action";
import ListGenres from "./list-genres";

const mapStateToProps = (state) => ({
  genres: state.genres,
  activeGenre: state.activeGenre
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilter(genreForFilter) {
    dispatch(changeActiveFilter(genreForFilter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListGenres);

