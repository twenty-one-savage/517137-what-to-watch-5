import {PureComponent} from "react";
class Player extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying
    };
  }

  componentDidMount() {
    const {src} = this.props;
    this._video = <video src={src}/>;
    this._video.oncanplaythrough = () => this.setState({
      isLoading: true
    });
    this._video.onplay = () => this.setState({
      isPlaying: true
    });
    this._video.onpause = () => this.setState({
      isPlaying: false
    });
  }

  componentWillUnmount() {
    this._video.oncanplaythrough = null;
    this._video.onPlay = null;
    this._video.onPause = null;
  }

  render() {
    return (
      <video
        onMouseEnter={() => this.setState({
          isPlaying: !this.state.isPlaying
        })}
      />
    );
  }

  componentDidUpdate() {
    if (this.state.isPlaying) {
      this._video.play();
    } else {
      this._video.pause();
    }
  }
}

Player.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default Player;
