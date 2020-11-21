import {filmsType} from "../../../commonPropTypes";

export default {
  "films": filmsType,
  "film": PropTypes.shape({
    "id": PropTypes.number.isRequired,
    "poster_image": PropTypes.string.isRequired,
    "background_image": PropTypes.string.isRequired,
    "name": PropTypes.string.isRequired,
    "genre": PropTypes.string.isRequired,
    "released": PropTypes.number.isRequired
  }).isRequired,
  "btnPlayHandler": PropTypes.func.isRequired,
};
