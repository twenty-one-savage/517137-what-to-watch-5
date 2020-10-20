import {ActionCreator} from "../../../store/action";

export const mapStateToProps = (state) => ({
  genres: state.genres,
  activeGenre: state.activeGenre
});

export const mapDispatchToProps = (dispatch) => ({
  changeActiveFilter(genreForFilter) {
    dispatch(ActionCreator.changeActiveFilter(genreForFilter));
  }
});
