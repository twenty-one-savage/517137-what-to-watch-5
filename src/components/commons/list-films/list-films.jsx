import FilmCard from "../film-card/film-card";
import {filmsType} from "../../../utils/types";
import {Film, FilmGenres} from "../../../consts";

const getFilmsByGenre = (list, genre) => {
  return genre === FilmGenres.ALL_GENRES ? list : list.filter(((el) => {
    return el.genres.find((item) => item === genre);
  }));
};

class ListFilms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedFilmsCount: Film.COUNT.main
    };
  }

  render() {
    const {films, activeGenre} = this.props;
    const filteredFilms = getFilmsByGenre(films, activeGenre);
    return (
      <>
        <div className="catalog__movies-list">
          {filteredFilms
            .slice(0, Math.min(filteredFilms.length, Film.COUNT.main))
            .map((film) => (
              <FilmCard key={film.id} film={film}/>
            ))}
        </div>
      </>
    );
  }
}

ListFilms.propTypes = filmsType;

export default ListFilms;
