import btnFavoriteProp from "./btn-favorite.prop";

const BtnFavorite = (props) => {
  const {film, btnFavoriteClickHandler} = props;

  const {
    id,
    is_favorite: filmStatus
  } = film;

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick={
        () => btnFavoriteClickHandler(id, filmStatus)
      }
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add" />
      </svg>
      <span>My list</span>
    </button>
  );
};

BtnFavorite.propTypes = btnFavoriteProp;

export default BtnFavorite;
