import {PureComponent} from "react";
import FilmCard from "../film-card/film-card";

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

ListFilm.propTypes = {
  films: PropTypes.array.isRequired
};

export default ListFilm;
