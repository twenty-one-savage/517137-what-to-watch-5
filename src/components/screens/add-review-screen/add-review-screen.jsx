import Header from "../../commons/sections/header/header";
import BreadCrumbs from "../../commons/breadcrumbs/breadcrumbs";
import {filmsType} from "../../../commonPropTypes";

class AddReviewScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      [`review-text`]: null,
      rating: null
    };

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleFieldChange = this._handleFieldChange.bind(this);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
  }

  _handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const {films, match} = this.props;
    const filmId = match.params.id;

    const currentFilm = films.find((film) => film.id === filmId);

    const {id, background, title, poster} = currentFilm;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={background} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header>
            <BreadCrumbs id={id} title={title} />
          </Header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={poster} alt={title} width="218" height="327"/>
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={this._handleFormSubmit}>
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={this._handleFieldChange}/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={this._handleFieldChange}/>
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={this._handleFieldChange}/>
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={this._handleFieldChange}/>
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={this._handleFieldChange}/>
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={this._handleFieldChange}/>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>
      </section>
    );
  }
}

AddReviewScreen.propTypes = filmsType;

export default AddReviewScreen;
