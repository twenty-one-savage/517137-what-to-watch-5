import TabsOverview from "./tabs-overview/tabs-overview";
import TabsDetails from "./tabs-details/tabs-details";
import TabsReviews from "./tabs-reviews/tabs-reviews";
import {TabsType} from "../../../consts";

const getTabContentByType = (tabType, film) => {
  switch (tabType) {
    case TabsType.OVERVIEW:
      return <TabsOverview film={film}/>;
    case TabsType.DETAILS:
      return <TabsDetails film={film}/>;
    case TabsType.REVIEWS:
      return <TabsReviews/>;
    default:
      return null;
  }
};

const FilmTabs = (props) => {

  const {film, activeTab, tabClickHandler} = props;
  const activeClass = `movie-nav__item--active`;
  const tabs = Object.entries(TabsType);

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            tabs.map(([key, value]) => {
              return (
                <li key={key} className={`movie-nav__item ${value === activeTab ? activeClass : ``}`}>
                  <a
                    href="#"
                    className="movie-nav__link"
                    data-tab={value}
                    onClick={tabClickHandler}
                  >{value}</a>
                </li>
              );
            })}
        </ul>
      </nav>

      {getTabContentByType(activeTab, film)}

    </div>
  );
};

FilmTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  tabClickHandler: PropTypes.func.isRequired,
  film: PropTypes.shape({
    rating: PropTypes.shape({
      value: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired
    }).isRequired,
    poll: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    duration: PropTypes.shape({
      hours: PropTypes.string.isRequired,
      minutes: PropTypes.string.isRequired
    }).isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    year: PropTypes.string.isRequired
  }).isRequired,
};

export default FilmTabs;
