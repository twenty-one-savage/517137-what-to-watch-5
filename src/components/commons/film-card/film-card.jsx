import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";
import filmCardProps from "./film-card.prop";


const FilmCard = (props) => {
  const {
    film,
    onMouseOver,
    onMouseOut,
    isPlaying
  } = props;

  const {
    id,
    poster,
    title,
    video
  } = film;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <Link to={`/films/${id}`}>
        <div className="small-movie-card__image">
          {isPlaying ?
            (<VideoPlayer videoSrc={video} posterSrc={poster} />) :
            (<img src={poster} alt={title} width="280" height="175" />)
          }
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = filmCardProps;

export default FilmCard;
