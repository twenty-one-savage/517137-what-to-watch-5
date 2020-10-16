import {Link} from "react-router-dom";
import Player from "../player/player";

const FilmCard = (props) => {
  const {film} = props;
  const {id, poster, title, video} = film;

  return (
    <article className="small-movie-card catalog__movies-card" id={id}>
      <Link to={`/films/${id}`}>
        <Player className="small-movie-card__image" videoSrc={video} isPlaying={false} posterSrc={poster} />
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired
  }).isRequired
};

export default FilmCard;
