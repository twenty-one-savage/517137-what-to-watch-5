export default {
  "film": PropTypes.shape({
    "poster_image": PropTypes.string.isRequired,
    "name": PropTypes.string.isRequired,
    "video_link": PropTypes.string.isRequired,
  }).isRequired,
  "handlePlayerExitClick": PropTypes.func.isRequired,
};
