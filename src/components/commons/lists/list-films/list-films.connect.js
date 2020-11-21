import {connect} from "react-redux";
import ListFilms from "./list-films";
import {getFilmsByGenre} from "../../../../store/selectors";

const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state.DATA.films, state.CINEMA.activeGenre),
  activeGenre: state.CINEMA.activeGenre
});

export default connect(mapStateToProps)(ListFilms);
