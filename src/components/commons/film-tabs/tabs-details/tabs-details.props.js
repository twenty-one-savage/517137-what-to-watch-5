const tabsDetailsProps = {
  film: PropTypes.shape({
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    duration: PropTypes.shape({
      hours: PropTypes.string.isRequired,
      minutes: PropTypes.string.isRequired
    }).isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired),
    year: PropTypes.string.isRequired
  }).isRequired
};

export default tabsDetailsProps;
