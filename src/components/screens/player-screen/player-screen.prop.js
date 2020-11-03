export default {
  films: PropTypes.arrayOf(PropTypes.shape({
    film: PropTypes.shape({
      posterSrc: PropTypes.string.isRequired,
      videoSrc: PropTypes.string.isRequired,
      duration: PropTypes.shape({
        hours: PropTypes.string.isRequired,
        minutes: PropTypes.string.isRequired
      }).isRequired
    })
  })).isRequired
};
