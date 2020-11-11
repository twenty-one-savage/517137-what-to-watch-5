import videoPlayerProp from "./video-player.prop";

const VideoPlayer = (props) => {
  const {videoSrc, posterSrc} = props;
  return (
    <video
      src={videoSrc}
      poster={posterSrc}
      autoPlay
      muted
    />
  );
};

VideoPlayer.propTypes = videoPlayerProp;

export default VideoPlayer;
