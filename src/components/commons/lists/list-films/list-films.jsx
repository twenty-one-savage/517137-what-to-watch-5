import FilmCard from "../../film-card/film-card";
import BtnShowMore from "../../btn-show-more/btn-show-more";
import {filmsType} from "../../../../commonPropTypes";
import {Film} from "../../../../consts";
import withHover from "../../../../hocs/with-hover/with-hover";

const FilmCardWithHover = withHover(FilmCard);

class ListFilms extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderedFilmsCount: Film.COUNT.main
    };
    this._handleBtnShowMoreClick = this._handleBtnShowMoreClick.bind(this);
  }

<<<<<<< Updated upstream
  _handleBtnShowMoreClick(evt) {
    evt.preventDefault();
    this.setState({
      renderedFilmsCount: this.state.renderedFilmsCount + Film.COUNT.main
    });
  }

  render() {
    const {films} = this.props;

    const filmsCount = films.length;
    const remains = films.slice(0, Math.min(filmsCount, this.state.renderedFilmsCount));
    return (
      <>
        <div className="catalog__movies-list">
          {remains.map((film) => (
            <FilmCardWithHover key={film.id} film={film}/>
=======
  const {films, activeNumberOfFilms} = props;
  return (
    <>
      <div className="catalog__movies-list">
        {
          films.slice(0, activeNumberOfFilms).map((film, i) => (
            <FilmCardWithHover
              key={`${i}-${film.name}`}
              film={film}
            />
>>>>>>> Stashed changes
          ))}
        </div>
        {filmsCount > this.state.renderedFilmsCount && <BtnShowMore onClick={this._handleBtnShowMoreClick}/>}
      </>
    );
  }
}

ListFilms.propTypes = filmsType;

export default ListFilms;
