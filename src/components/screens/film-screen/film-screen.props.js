import {filmsType} from "../../../commonPropTypes";

export default {
  films: filmsType,
  btnPlayHandler: PropTypes.func.isRequired,
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    background: PropTypes.string.isRequired,
  }).isRequired
};
