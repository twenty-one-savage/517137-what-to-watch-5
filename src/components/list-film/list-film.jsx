import FilmCard from "../film-card/film-card";

class ListFilm extends React.PureComponent {
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
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })).isRequired
};

export default ListFilm;
