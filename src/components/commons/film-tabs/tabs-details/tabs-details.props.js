const tabsDetailsProps = {
  "film": PropTypes.shape({
    "director": PropTypes.string.isRequired,
    "starring": PropTypes.arrayOf(PropTypes.string).isRequired,
    "run_time": PropTypes.number.isRequired,
    "genre": PropTypes.string.isRequired,
    "released": PropTypes.number.isRequired
  }).isRequired
};

export default tabsDetailsProps;
