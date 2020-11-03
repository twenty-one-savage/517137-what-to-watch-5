import playerScreenProp from "./player-screen.prop";

class PlayerScreen extends React.Component {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
    this._videoProgressRef = React.createRef();
    this.state = {
      isLoading: true,
      isPlaying: false,
      videoTime: 0
    };
    this._handlePlayClick = this._handlePlayClick.bind(this);
    this._handlePauseClick = this._handlePauseClick.bind(this);
  }

  _handlePlayClick() {
    this.setState({
      isPlaying: true
    });
  }

  _handlePauseClick() {
    this.setState({
      isPlaying: false
    });
  }

  shouldComponentUpdate() {
    const video = this._videoRef.current;
    // const videoProgress = this._videoProgressRef.current;

    video.onloadedmetadata = () => {
      return video.currentTime / video.duration * 100;
    };
    return true;
  }

  componentDidMount() {
    const video = this._videoRef.current;
    // const videoProgress = this._videoProgressRef.current;

    video.onloadedmetadata = () => {
      this.setState({
        videoTime: video.currentTime / video.duration * 100
      });
    };

    video.oncanplaythrough = () => this.setState({
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
    video.oncanplaythrough = null;
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

  render() {
    const {films, match} = this.props;
    const filmId = match.params.id;

    const currentFilm = films.find((film) => film.id === filmId);
    const {poster, video, duration} = currentFilm;
    return (
      <div className="player">
        <video
          ref={this._videoRef}
          src={video}
          className="player__video"
          poster={poster}
        />

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress ref={this._videoProgressRef} className="player__progress" value={this.state.videoTime} max="100"/>
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{`${duration.hours}:${duration.minutes}`}</div>
          </div>

          <div className="player__controls-row">
            {!this.state.isPlaying && <button type="button" className="player__play" onClick={this._handlePlayClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>}
            {this.state.isPlaying && <button type="button" className="player__play" onClick={this._handlePauseClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#pause" />
              </svg>
              <span>Pause</span>
            </button>}
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

PlayerScreen.propTypes = playerScreenProp;

export default PlayerScreen;
