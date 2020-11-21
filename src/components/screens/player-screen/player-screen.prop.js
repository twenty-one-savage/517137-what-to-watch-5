export default {
  "name": PropTypes.string.isRequired,
  "isPlaying": PropTypes.bool.isRequired,
  "videoCurrentTime": PropTypes.number.isRequired,
  "progressBarPosition": PropTypes.number.isRequired,
  "handlePlayerExitClick": PropTypes.func.isRequired,
  "handlePlayerFullscreenClick": PropTypes.func.isRequired,
  "handlePlayerPlayClick": PropTypes.func.isRequired,
  "handlePlayerPauseClick": PropTypes.func.isRequired,
  "children": PropTypes.element.isRequired,
};
