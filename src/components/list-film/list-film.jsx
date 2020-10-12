import {PureComponent} from "react";
import FilmCard from "../film-card/film-card";
import {filmsType} from "../../utils/types";

class ListFilm extends PureComponent {
  constructor(props) {
    super(props);
    this.films = this.props.films;
    this.state = {
      activeFilm: null
    };
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    );
  }
}

ListFilm.propTypes = filmsType;

export default ListFilm;
