import {filmsType} from "../../../../commonPropTypes";

export default {
  "films": filmsType,
  "activeGenre": PropTypes.string.isRequired,
  "changeActiveFilter": PropTypes.func.isRequired
};
