import listGenreProps from "./list-genres.prop";
import {getUniqueGenresArray} from "../../../../store/selectors";

const ListGenres = (props) => {
  const {films, activeGenre, changeActiveFilter} = props;
  const genres = getUniqueGenresArray(films);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) =>
        <li
          key={`genre-${i}`}
          className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ` `}`}
          onClick={(evt) => {
            evt.preventDefault();
            changeActiveFilter(genre);
          }}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      )}
    </ul>
  );
};

ListGenres.propTypes = listGenreProps;

export default ListGenres;
