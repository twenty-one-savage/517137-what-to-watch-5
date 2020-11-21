export default {
  "film": PropTypes.shape({
    "id": PropTypes.number.isRequired,
    "name": PropTypes.string.isRequired,
    "preview_image": PropTypes.string.isRequired,
    "preview_video_link": PropTypes.string.isRequired
  }).isRequired,
  "onMouseOver": PropTypes.func.isRequired,
  "onMouseOut": PropTypes.func.isRequired,
  "isPlaying": PropTypes.bool.isRequired
};
