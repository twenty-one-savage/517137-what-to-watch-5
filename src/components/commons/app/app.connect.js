import {connect} from "react-redux";
import App from "./app";
import {initApplication} from "./actions/initApplication";

const mapStateToProps = (state) => ({
  films: state.DATA.films,
  isApplicationReady: state.CINEMA.isApplicationReady,
});

const mapDispatchToProps = (dispatch) => ({
  initApplication: () => dispatch(initApplication())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
