import FilmCard from "../../film-card/film-card";
import BtnShowMore from "../../btn-show-more/btn-show-more";
import {filmsType} from "../../../../commonPropTypes";
import {Film, FilmGenres} from "../../../../consts";

const getFilmsByGenre = (list, genre) => {
  return genre === FilmGenres.ALL_GENRES ? list : list.filter(((el) => {
    return el.genres.find((item) => item === genre);
  }));
};

class ListFilms extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderedFilmsCount: Film.COUNT.main
    };
    this._handleBtnShowMoreClick = this._handleBtnShowMoreClick.bind(this);
  }

  _handleBtnShowMoreClick(evt) {
    evt.preventDefault();
    this.setState({
      renderedFilmsCount: this.state.renderedFilmsCount + Film.COUNT.main
    });
  }

  render() {
    const {films, activeGenre} = this.props;
    const filteredFilms = getFilmsByGenre(films, activeGenre);

    const filmsCount = filteredFilms.length;
    const remains = filteredFilms.slice(0, Math.min(filmsCount, this.state.renderedFilmsCount));
    return (
      <>
        <div className="catalog__movies-list">
          {remains.map((film) => (
            <FilmCard key={film.id} film={film}/>
          ))}
        </div>
        {filmsCount > this.state.renderedFilmsCount && <BtnShowMore onClick={this._handleBtnShowMoreClick}/>}
      </>
    );
  }
}

ListFilms.propTypes = filmsType;

export default ListFilms;
