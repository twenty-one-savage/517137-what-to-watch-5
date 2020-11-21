import {connect} from "react-redux";
import ListSameFilms from "./list-same-films";

const mapStateToProps = (state) => ({
  films: state.DATA.films
});

export default connect(mapStateToProps)(ListSameFilms);
