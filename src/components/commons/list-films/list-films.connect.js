import {connect} from "react-redux";
import ListFilms from "./list-films";

export const mapStateToProps = (state) => ({
  films: state.films,
  activeGenre: state.activeGenre
});

export default connect(mapStateToProps)(ListFilms);
