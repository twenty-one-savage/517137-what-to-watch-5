import {getVideoProgress} from "../../utils/common";

const withPlayer = (Component) => {
  class WithPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        isPlaying: false,
        videoCurrentTime: 0,
        progressBarPosition: 0
      };

      this._videoRef = React.createRef();

      this._handlePlayerFullscreenClick = this._handlePlayerFullscreenClick.bind(this);
      this._handlePlayerPlayClick = this._handlePlayerPlayClick.bind(this);
      this._handlePlayerPauseClick = this._handlePlayerPauseClick.bind(this);
      this._handleVideoTimeUpdate = this._handleVideoTimeUpdate.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;

      video.oncanplay = () => this.setState({
        isLoading: false
      });

      video.onplay = () => this.setState({
        isPlaying: true
      });

      video.onpause = () => this.setState({
        isPlaying: false
      });
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplay = null;
      video.onplay = null;
      video.onpause = null;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    _handlePlayerFullscreenClick() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    _handlePlayerPlayClick() {
      this.setState({
        isPlaying: true
      });
    }

    _handlePlayerPauseClick() {
      this.setState({
        isPlaying: false
      });
    }

    _handleVideoTimeUpdate() {
      const video = this._videoRef.current;
      this.setState({
        videoCurrentTime: video.currentTime,
        progressBarPosition: getVideoProgress(video)
      });
    }

    render() {
      const {film, handlePlayerExitClick} = this.props;
      const {isPlaying, videoCurrentTime, progressBarPosition} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          name={film.name}
          videoCurrentTime={videoCurrentTime}
          progressBarPosition={progressBarPosition}
          handlePlayerExitClick={handlePlayerExitClick}
          handlePlayerFullscreenClick={this._handlePlayerFullscreenClick}
          handlePlayerPlayClick={this._handlePlayerPlayClick}
          handlePlayerPauseClick={this._handlePlayerPauseClick}
        >
          <video
            ref={this._videoRef}
            className="player__video"
            onTimeUpdate={this._handleVideoTimeUpdate}
            poster={film.poster_image}
            src={film.video_link}
          />
        </Component>
      );
    }
  }

  WithPlayer.propTypes = {
    "film": PropTypes.shape({
      "poster_image": PropTypes.string.isRequired,
      "name": PropTypes.string.isRequired,
      "video_link": PropTypes.string.isRequired,
    }).isRequired,
    "handlePlayerExitClick": PropTypes.func.isRequired
  };

  return WithPlayer;
};

export default withPlayer;
