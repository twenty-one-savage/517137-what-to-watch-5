import {connect} from "react-redux";
import FilmScreen from "./film-screen";

export const mapStateToProps = (state) => ({
  films: state.films
});

export default connect(mapStateToProps)(FilmScreen);
