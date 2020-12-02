import {connect} from "react-redux";
import MainScreen from "./main-screen";

const mapStateToProps = (state) => ({
  films: state.DATA.films,
  promoFilm: state.DATA.promoFilm
});

export default connect(mapStateToProps)(MainScreen);
