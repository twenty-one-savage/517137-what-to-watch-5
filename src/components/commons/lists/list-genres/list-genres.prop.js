export default {
  "genres": PropTypes.arrayOf(PropTypes.string).isRequired,
  "activeGenre": PropTypes.string.isRequired,
  "changeActiveFilter": PropTypes.func.isRequired
};
