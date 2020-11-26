import {filmsType} from "../../../commonPropTypes";

export default {
  "films": filmsType,
  "isApplicationReady": PropTypes.bool.isRequired,
  "initApplication": PropTypes.func.isRequired
};
