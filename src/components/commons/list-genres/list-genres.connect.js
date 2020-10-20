import {connect} from "react-redux";
import {ActionCreator} from "../../../store/action";
import ListGenres from "./list-genres";

export const mapStateToProps = (state) => ({
  genres: state.genres,
  activeGenre: state.activeGenre
});

export const mapDispatchToProps = (dispatch) => ({
  changeActiveFilter(genreForFilter) {
    dispatch(ActionCreator.changeActiveFilter(genreForFilter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListGenres);

