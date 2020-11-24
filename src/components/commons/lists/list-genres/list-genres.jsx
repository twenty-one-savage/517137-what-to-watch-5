import listGenreProps from "./list-genres.prop";

const ListGenres = (props) => {
  const {genres, activeGenre, changeActiveFilter} = props;
  const activeClass = `catalog__genres-item--active`;
  return (
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
  );
};

ListGenres.propTypes = listGenreProps;

export default ListGenres;
