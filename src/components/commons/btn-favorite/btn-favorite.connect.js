import {connect} from "react-redux";
import BtnFavorite from "./btn-favorite";
import {changeFilmStatus} from "../../../store/api-actions";

const mapDispatchToProps = (dispatch) => ({
  btnFavoriteClickHandler(filmId, favBool) {
    dispatch(changeFilmStatus(filmId, favBool));
  }
});

export default connect(null, mapDispatchToProps)(BtnFavorite);
