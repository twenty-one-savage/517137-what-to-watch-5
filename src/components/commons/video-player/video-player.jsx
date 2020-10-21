class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying
    };
    this._timeoutId = null;
    this._handleVideoMouseOver = this._handleVideoMouseOver.bind(this);
    this._handleVideoMouseOut = this._handleVideoMouseOut.bind(this);
  }

  componentDidMount() {
    const video = this._videoRef.current;
    video.muted = true;

    video.oncanplaythrough = () => this.setState({
      isLoading: false
    });
    video.onplay = () => this.setState({
      isPlaying: true
    });
    video.onload = () => this.setState({
      isPlaying: false
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onload = null;
    clearTimeout(this._timeoutId);
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.state.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  _handleVideoMouseOver() {
    this._timeoutId = setTimeout(() => {
      this.setState({
        isPlaying: true
      });
    }, 1000);
  }

  _handleVideoMouseOut() {
    clearTimeout(this._timeoutId);
    this.setState({
      isPlaying: false
    });
  }

  render() {
    const {videoSrc, posterSrc} = this.props;
    return (
      <video
        src={videoSrc}
        poster={posterSrc}
        ref={this._videoRef}
        onMouseOver={this._handleVideoMouseOver}
        onMouseOut={this._handleVideoMouseOut}
      />
    );
  }
}

VideoPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  posterSrc: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;
