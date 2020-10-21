import {Link} from "react-router-dom";

class AddReviewScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.film = props;
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
    const {id, background, title, poster} = this.film;
    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={background} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to={`/`} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${id}/`} className="breadcrumbs__link">{title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

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

AddReviewScreen.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
  }).isRequired
};

export default AddReviewScreen;
