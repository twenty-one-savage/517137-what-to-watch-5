import {connect} from "react-redux";
import FilmScreen from "./film-screen";

const mapStateToProps = (state) => ({
  films: state.DATA.films
});

export default connect(mapStateToProps)(FilmScreen);
