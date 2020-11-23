import {connect} from "react-redux";
import App from "./app";
import {checkAuth, fetchFilmList} from "../../../store/api-actions";

const mapStateToProps = (state) => ({
  films: state.DATA.films,
  isApplicationReady: state.CINEMA.isApplicationReady
});

const mapDispatchToProps = (dispatch) => ({
  init() {
    return Promise.all([
      dispatch(fetchFilmList()),
      dispatch(checkAuth())
    ]);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
