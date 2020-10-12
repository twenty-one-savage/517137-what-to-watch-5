import {Link} from "react-router-dom";

const FilmCard = (props) => {
  const {film} = props;
  const {id, poster, title} = film;
  return (
    <article className="small-movie-card catalog__movies-card">
      <Link to={`/films/${id}`} className="small-movie-card__image">
        <div className="small-movie-card__image">
          <img src={poster} alt={title} width="280" height="175" />
        </div>
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
  }).isRequired
};

export default FilmCard;
