import {clearAllTimeouts} from "../../../utils/common";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying
    };
    this._timeoutId = null;
    this._playVideo = this._playVideo.bind(this);
    this._stopVideo = this._stopVideo.bind(this);
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = () => this.setState({
      isLoading: true
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

    video.oncanplaythrough = null;
    video.onPlay = null;
    video.onPause = null;
    clearAllTimeouts();
  }

  render() {
    const {videoSrc, posterSrc} = this.props;
    return (
      <video
        src={videoSrc}
        poster={posterSrc}
        ref={this._videoRef}
        onMouseOver={this._playVideo}
        onMouseOut={this._stopVideo}
      />
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.state.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  _playVideo() {
    const video = this._videoRef.current;
    video.muted = true;
    this._timeoutId = setTimeout(() => {
      this.setState({
        isPlaying: true
      });
    }, 1000);
  }

  _stopVideo() {
    const video = this._videoRef.current;
    clearTimeout(this._timeoutId);
    this.setState({
      isPlaying: false
    });
    video.load();
    video.pause();
  }
}

VideoPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  posterSrc: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;