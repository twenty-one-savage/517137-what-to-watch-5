import {PureComponent, createRef} from "react";
class Player extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying
    };
    this._playVideo = this._playVideo.bind(this);
    this._stopVideo = this._stopVideo.bind(this);
  }

  componentDidMount() {
    const {videoSrc, posterSrc} = this.props;
    const video = this._videoRef.current;

    video.src = videoSrc;
    video.poster = posterSrc;

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
  }

  render() {
    return (
      <video
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
    video.src = this.props.videoSrc;
    video.muted = true;
    setTimeout(() => {
      this.setState({
        isPlaying: true
      });
    }, 1000);
  }

  _stopVideo() {
    const video = this._videoRef.current;
    this.setState({
      isPlaying: false
    });
    video.src = ` `;
  }
}

Player.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  posterSrc: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired
};

export default Player;
