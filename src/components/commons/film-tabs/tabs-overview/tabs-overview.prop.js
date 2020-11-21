const tabsOverviewProps = {
  "film": PropTypes.shape({
    "rating": PropTypes.number.isRequired,
    "starring": PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    "scores_count": PropTypes.number.isRequired,
    "director": PropTypes.string.isRequired,
    "description": PropTypes.string.isRequired
  }).isRequired
};

export default tabsOverviewProps;
