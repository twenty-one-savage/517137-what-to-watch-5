import listGenreProps from "./list-genres.prop";
import ListFilms from "../list-films/list-films.connect";
import withShowMore from "../../../../hocs/with-show-more/with-show-more";

const ListFilmWithShowMore = withShowMore(ListFilms);

const ListGenres = (props) => {
  const {films, genres, activeGenre, changeActiveFilter} = props;
  const activeClass = `catalog__genres-item--active`;
  return (
    <>
    <ul className="catalog__genres-list">
      {genres.map((genre, i) =>
        <li
          key={`genre-${i}`}
          className={`catalog__genres-item ${activeGenre === genre ? activeClass : ``}`}
          onClick={(evt) => {
            evt.preventDefault();
            changeActiveFilter(genre);
          }}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      )}
    </ul>
    <ListFilmWithShowMore
      films={films}
    />
    </>
  );
};

ListGenres.propTypes = listGenreProps;

export default ListGenres;
