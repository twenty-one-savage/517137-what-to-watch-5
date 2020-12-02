import FilmCard from "../../film-card/film-card";
import listFilmsProp from "./list-films.prop";
import withHover from "../../../../hocs/with-hover/with-hover";

const FilmCardWithHover = withHover(FilmCard);

const ListFilms = (props) => {

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

          ))}
      </div>
    </>
  );
};

ListFilms.propTypes = listFilmsProp;

export default ListFilms;
