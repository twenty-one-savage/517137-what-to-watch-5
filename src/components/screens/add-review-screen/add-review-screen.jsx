import {Fragment} from "react";
import Header from "../../commons/sections/header/header";
import BreadCrumbs from "../../commons/breadcrumbs/breadcrumbs";
import addReviewScreenProp from "./add-review-screen.prop";

const RATING_STARS = [1, 2, 3, 4, 5];

const AddReviewScreen = (props) => {

  const {
    film,
    rating,
    isValid,
    fieldChangeHandler,
    comment,
    onSubmit
  } = props;

  const {
    id,
    background_image: backgroundImage,
    background_color: backgroundColor,
    name,
    poster_image: poster,
  } = film;

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(
        id,
        {
          rating,
          comment,
        });
  };


  return (
    <section
      className="movie-card movie-card--full"
      style={{
        backgroundColor,
      }}
    >
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <BreadCrumbs id={id} name={name}/>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={name} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {RATING_STARS.map((star) => {
                return (
                  <Fragment key={`star-${star}`}>
                    <input
                      className="rating__input"
                      id={`star-${star}`}
                      type="radio"
                      name="rating"
                      value={star}
                      onChange={fieldChangeHandler}
                      checked={+rating === star}
                    />
                    <label className="rating__label" htmlFor={`star-${star}`}>{star}</label>
                  </Fragment>
                );
              })}
            </div>
          </div>

          <div className="add-review__text" style={{
            backgroundColor,
            filter: `brightness(150%)`,
          }}>
            <textarea
              className="add-review__textarea"
              name="comment"
              id="comment"
              placeholder="Review text"
              onChange={fieldChangeHandler}
              minLength="50"
              maxLength="400"
            />
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                onClick={handleFormSubmit}
                disabled={!(isValid())}
              >Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

AddReviewScreen.propTypes = addReviewScreenProp;

export default AddReviewScreen;
