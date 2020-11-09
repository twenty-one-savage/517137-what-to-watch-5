import playerScreenProp from "./player-screen.prop";
import {getFormattedTime} from "../../../utils/common";

const PlayerScreen = (props) => {
  const {
    title,
    isPlaying,
    videoCurrentTime,
    progressBarPosition,
    handlePlayerExitClick,
    handlePlayerFullScreen,
    handlePlayerPlayClick,
    handlePlayerPauseClick,
    children
  } = props;

  const styleLeft = {left: `${progressBarPosition}%`};

  return (
    <div className="player">
      {children}

      <button type="button" className="player__exit" onClick={handlePlayerExitClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={`${progressBarPosition}`} max="100"/>
            <div className="player__toggler" style={styleLeft}>Toggler</div>
          </div>
          <div className="player__time-value">{getFormattedTime(videoCurrentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={isPlaying ? handlePlayerPauseClick : handlePlayerPlayClick}>
            {!isPlaying && (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </>
            )}
            {isPlaying && (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#pause"/>
                </svg>
                <span>Pause</span>
              </>
            )}

          </button>
          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" onClick={handlePlayerFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerScreen.propTypes = playerScreenProp;

export default PlayerScreen;
