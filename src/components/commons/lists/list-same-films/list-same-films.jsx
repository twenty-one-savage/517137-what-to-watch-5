import FilmCard from "../../film-card/film-card";
import {getFilmsByGenre} from "../../../../store/selectors";
import listSameFilmsProps from "./list-same-films.prop";
import {Film} from "../../../../consts";
import withHover from "../../../../hocs/with-hover/with-hover";

const FilmCardWithHover = withHover(FilmCard);

const ListSameFilms = (props) => {
  const {films, genre} = props;
  const filteredFilms = getFilmsByGenre(films, genre).slice(0, Film.SAME_FILMS.count);
  return (
    <div className="catalog__movies-list">
      {filteredFilms.map((film) => (
        <FilmCardWithHover film={film} key={film.id} />
      ))}
    </div>
  );
};

ListSameFilms.propTypes = listSameFilmsProps;

export default ListSameFilms;
