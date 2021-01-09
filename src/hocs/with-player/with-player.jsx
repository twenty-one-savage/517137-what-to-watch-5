import {getVideoProgress} from "../../utils/common";
import withPlayerProp from "./with-player.prop";

// const withPlayer = (Component) => {
//   class WithPlayer extends React.PureComponent {
//     constructor(props) {
//       super(props);
//
//       this.state = {
//         isLoading: true,
//         isPlaying: false,
//         videoCurrentTime: 0,
//         progressBarPosition: 0
//       };
//
//       this._videoRef = React.createRef();
//
//       this._handlePlayerFullScreenClick = this._handlePlayerFullScreenClick.bind(this);
//       this._handlePlayerPlayClick = this._handlePlayerPlayClick.bind(this);
//       this._handlePlayerPauseClick = this._handlePlayerPauseClick.bind(this);
//       this._handleVideoTimeUpdate = this._handleVideoTimeUpdate.bind(this);
//     }
//
//     componentDidMount() {
//       const video = this._videoRef.current;
//
//       video.oncanplay = () => this.setState({
//         isLoading: false
//       });
//
//       video.onplay = () => this.setState({
//         isPlaying: true
//       });
//
//       video.onpause = () => this.setState({
//         isPlaying: false
//       });
//     }
//
//     componentWillUnmount() {
//       const video = this._videoRef.current;
//
//       video.oncanplay = null;
//       video.onplay = null;
//       video.onpause = null;
//     }
//
//     componentDidUpdate() {
//       const video = this._videoRef.current;
//       if (this.state.isPlaying) {
//         video.play();
//       } else {
//         video.pause();
//       }
//     }
//
//     _handlePlayerFullScreenClick() {
//       const video = this._videoRef.current;
//       video.requestFullscreen();
//     }
//
//     _handlePlayerPlayClick() {
//       this.setState({
//         isPlaying: true
//       });
//     }
//
//     _handlePlayerPauseClick() {
//       this.setState({
//         isPlaying: false
//       });
//     }
//
//     _handleVideoTimeUpdate() {
//       const video = this._videoRef.current;
//       this.setState({
//         videoCurrentTime: video.currentTime,
//         progressBarPosition: getVideoProgress(video)
//       });
//     }
//
//     render() {
//       const {film, handlePlayerExitClick} = this.props;
//       const {isPlaying, videoCurrentTime, progressBarPosition} = this.state;
//
//       return (
//         <Component
//           {...this.props}
//           isPlaying={isPlaying}
//           name={film.name}
//           videoCurrentTime={videoCurrentTime}
//           progressBarPosition={progressBarPosition}
//           handlePlayerExitClick={handlePlayerExitClick}
//           handlePlayerFullScreenClick={this._handlePlayerFullScreenClick}
//           handlePlayerPlayClick={this._handlePlayerPlayClick}
//           handlePlayerPauseClick={this._handlePlayerPauseClick}
//         >
//           <video
//             ref={this._videoRef}
//             className="player__video"
//             onTimeUpdate={this._handleVideoTimeUpdate}
//             poster={film.poster_image}
//             src={film.video_link}
//           />
//         </Component>
//       );
//     }
//   }
//
//   WithPlayer.propTypes = withPlayerProp;
//
//   return WithPlayer;
// };

const withPlayer = (Component) => (props) => {
  const [isLoading, setLoading] = React.useState(true);
  const [isPlaying, setPlaying] = React.useState(false);
  const [videoCurrentTime, setVideoCurrentTime] = React.useState(0);
  const [progressBarPosition, setProgressBarPosition] = React.useState(0);

  React.useEffect(() => setLoading(false), []);

  let videoRef = React.useRef();

  const handlePlayerFullScreenClick = () => {
    const video = videoRef.current;
    video.requestFullscreen();
  };

  const handlePlayerPlayClick = () => {
    const video = videoRef.current;
    video.play();
    setPlaying(true);
  };

  const handlePlayerPauseClick = () => {
    const video = videoRef.current;
    video.pause();
    setPlaying(false);
  };

  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;
    setVideoCurrentTime(video.currentTime);
    setProgressBarPosition(getVideoProgress(video));
  };

  const {film, handlePlayerExitClick} = props;

  return (
    <Component
      isLoading={isLoading}
      isPlaying={isPlaying}
      name={film.name}
      videoCurrentTime={videoCurrentTime}
      progressBarPosition={progressBarPosition}
      handlePlayerExitClick={handlePlayerExitClick}
      handlePlayerFullScreenClick={handlePlayerFullScreenClick}
      handlePlayerPlayClick={handlePlayerPlayClick}
      handlePlayerPauseClick={handlePlayerPauseClick}
    >
      <video
        ref={videoRef}
        className="player__video"
        onTimeUpdate={handleVideoTimeUpdate}
        poster={film.poster_image}
        src={film.video_link}
      />
    </Component>
  );
};


export default withPlayer;
