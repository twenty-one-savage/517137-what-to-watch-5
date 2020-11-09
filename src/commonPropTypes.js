export const filmsType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  background: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    value: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
  }).isRequired,
  poll: PropTypes.number.isRequired,
  producer: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired
})).isRequired;
