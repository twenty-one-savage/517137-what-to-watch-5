import {connect} from "react-redux";
import FilmScreen from "./film-screen";
import {fetchFilmComments} from "../../../store/api-actions";

const mapStateToProps = (state) => ({
  films: state.DATA.films,
  authorizationStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(fetchFilmComments(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmScreen);
