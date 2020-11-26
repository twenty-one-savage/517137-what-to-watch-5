import {filmsType} from "../../../commonPropTypes";

export default {
  "films": filmsType,
  "btnPlayHandler": PropTypes.func.isRequired,
  "authorizationStatus": PropTypes.string.isRequired,
  "film": PropTypes.shape({
    "id": PropTypes.number.isRequired,
    "name": PropTypes.string.isRequired,
    "poster_image": PropTypes.string.isRequired,
    "released": PropTypes.number.isRequired,
    "genre": PropTypes.string.isRequired,
    "background_image": PropTypes.string.isRequired,
    "background_color": PropTypes.string.isRequired
  }).isRequired
};
