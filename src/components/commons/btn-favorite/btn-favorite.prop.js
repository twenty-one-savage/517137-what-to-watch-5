export default {
  "film": PropTypes.shape({
    "id": PropTypes.number.isRequired,
    "is_favorite": PropTypes.bool.isRequired,
  }).isRequired
};
