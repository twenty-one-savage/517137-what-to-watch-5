export default {
  "activeTab": PropTypes.string.isRequired,
  "tabClickHandler": PropTypes.func.isRequired,
  "film": PropTypes.shape({
    "rating": PropTypes.number.isRequired,
    "scores_count": PropTypes.number.isRequired,
    "director": PropTypes.string.isRequired,
    "description": PropTypes.string.isRequired,
    "starring": PropTypes.arrayOf(PropTypes.string).isRequired,
    "run_time": PropTypes.number.isRequired,
    "genre": PropTypes.string.isRequired,
    "released": PropTypes.number.isRequired
  }).isRequired,
};
