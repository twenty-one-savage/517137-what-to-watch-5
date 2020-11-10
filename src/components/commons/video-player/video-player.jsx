import videoPlayerProp from "./video-player.prop";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  render() {
    const {videoSrc, posterSrc} = this.props;
    return (
      <video
        ref={this._videoRef}
        src={videoSrc}
        poster={posterSrc}
      />
    );
  }
}

VideoPlayer.propTypes = videoPlayerProp;

export default VideoPlayer;
