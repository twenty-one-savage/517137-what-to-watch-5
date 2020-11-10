import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";
import filmCardProps from "./film-card.prop";
import withHover from "../../../hocs/with-hover/with-hover";

const VideoPlayerWithHover = withHover(VideoPlayer);

const FilmCard = (props) => {
  const {film} = props;
  const {id, poster, title, video} = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <Link to={`/films/${id}`}>
        <VideoPlayerWithHover className="small-movie-card__image" videoSrc={video} posterSrc={poster} />
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = filmCardProps;

export default FilmCard;
