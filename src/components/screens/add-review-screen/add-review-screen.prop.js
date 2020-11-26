export default {
  film: PropTypes.shape({
    "id": PropTypes.number.isRequired,
    "background_image": PropTypes.string.isRequired,
    "background_color": PropTypes.string.isRequired,
    "poster_image": PropTypes.string.isRequired,
    "name": PropTypes.string.isRequired,
  })
};
