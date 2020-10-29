import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";
import filmCardProps from "./film-card.prop";

const FilmCard = (props) => {
  const {film} = props;
  const {id, poster, title, video} = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <Link to={`/films/${id}`}>
        <VideoPlayer className="small-movie-card__image" videoSrc={video} isPlaying={false} posterSrc={poster} />
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = filmCardProps;

export default FilmCard;
