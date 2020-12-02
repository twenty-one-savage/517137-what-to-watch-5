import {Fragment} from "react";
import reviewFormProp from "./review-form.prop";

const RATINGS = [`1`, `2`, `3`, `4`, `5`];

const ReviewForm = (props) => {
  const {onChangeRating, onChangeText, onSubmit} = props;

  const [formDisable, setFormDisable] = React.useState(false);

  const onSubmitClick = (evt) => {
    evt.preventDefault();

    setFormDisable(true);

    onSubmit(props.filmId, props.activeState, ifErrorOccurs);

  };
  const commentConditions = props.reviewTextValue.length < 50 || props.reviewTextValue.length > 400 || props.currentRating === ``;

  const ifErrorOccurs = () => {
    props.errorFunc(props.error);
    setFormDisable(false);
    return formDisable;
  };

  return (
    <form action="#" className="add-review__form" onSubmit={onSubmitClick}>
      {props.error === true
        ? <p style={{textAlign: `center`, fontSize: 35 + `px`}}>Something went wrong! Try again</p>
        : ``
      }
      <div className="rating">
        <div className="rating__stars">
          {RATINGS.map((rating, i) => (
            <Fragment key={i + rating}>
              <input className="rating__input" type="radio" name="rating"
                id={`star-${rating}`}
                value={rating}
                checked={props.currentRating === rating}
                onChange={(evt) => {
                  onChangeRating(evt);
                }}
                disabled={formDisable}
              />
              <label className="rating__label"
                htmlFor={`star-${rating}`}>Rating {rating}</label>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          value={props.reviewTextValue}
          onChange={(evt) => {
            onChangeText(evt);
          }}
          disabled={formDisable}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={commentConditions || formDisable}>Post</button>
        </div>
      </div>
    </form>
  );
};

ReviewForm.propTypes = reviewFormProp;

export default ReviewForm;
