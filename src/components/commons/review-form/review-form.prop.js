export default {
  onSubmit: PropTypes.func.isRequired,
  currentRating: PropTypes.string.isRequired,
  onChangeRating: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  reviewTextValue: PropTypes.string.isRequired,
  activeState: PropTypes.shape({
    reviewRating: PropTypes.string.isRequired,
    reviewText: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
  }),
  filmId: PropTypes.number.isRequired,
  error: PropTypes.bool.isRequired,
  errorFunc: PropTypes.func.isRequired,
};
