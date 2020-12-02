import {connect} from "react-redux";
import MyListScreen from "./my-list-screen";
import {getFavoriteFilms} from "../../../store/selectors";

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state)
});

export default connect(mapStateToProps)(MyListScreen);
