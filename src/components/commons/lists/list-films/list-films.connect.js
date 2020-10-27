import {connect} from "react-redux";
import ListFilms from "./list-films";
import {getFilmsByGenre} from "./selectors/getFilmsByGenre";

export const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state.films, state.activeGenre),
  activeGenre: state.activeGenre
});

export default connect(mapStateToProps)(ListFilms);
