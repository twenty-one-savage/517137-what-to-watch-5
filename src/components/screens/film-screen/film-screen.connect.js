import {connect} from "react-redux";
import FilmScreen from "./film-screen";

const mapStateToProps = (state) => ({
  films: state.DATA.films,
  authorizationStatus: state.USER.authorizationStatus
});

export default connect(mapStateToProps)(FilmScreen);
