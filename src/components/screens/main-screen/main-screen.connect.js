import {connect} from "react-redux";
import MainScreen from "./main-screen";
import {getPromoFilm} from "./actions/getPromoFilm";

const mapStateToProps = (state) => ({
  films: state.DATA.films,
  promoFilm: state.DATA.promoFilm
});

const mapDispatchToProps = (dispatch) => ({
  getPromoFilm: () => getPromoFilm(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
