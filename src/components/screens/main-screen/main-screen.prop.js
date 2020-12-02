export default {
  "promoFilm": PropTypes.shape({
    "id": PropTypes.number.isRequired,
    "poster_image": PropTypes.string.isRequired,
    "background_image": PropTypes.string.isRequired,
    "background_color": PropTypes.string.isRequired,
    "name": PropTypes.string.isRequired,
    "released": PropTypes.number.isRequired,
    "genre": PropTypes.string.isRequired,
  }),
  "btnPlayHandler": PropTypes.func.isRequired,
};
