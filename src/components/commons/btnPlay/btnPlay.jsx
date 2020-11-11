import btnPlayProp from "./btnPlay.props";

const BtnPlay = (props) => {
  const {id, btnPlayHandler} = props;
  return (
    <button className="btn btn--play movie-card__button" type="button"
      onClick={() => btnPlayHandler(id)}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </button>
  );
};

BtnPlay.propTypes = btnPlayProp;

export default BtnPlay;
