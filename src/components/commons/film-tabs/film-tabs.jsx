import TabsOverview from "./tabs-overview/tabs-overview";
import TabsDetails from "./tabs-details/tabs-details";
import TabsReviews from "./tabs-reviews/tabs-reviews";
import {Tab} from "../../../consts";

const TABS = {
  [Tab.OVERVIEW]: {
    title: `Overview`,
    type: Tab.OVERVIEW,
  },
  [Tab.DETAILS]: {
    title: `Details`,
    type: Tab.DETAILS,
  },
  [Tab.REVIEWS]: {
    title: `Reviews`,
    type: Tab.REVIEWS,
  },
};

const getTabContentByType = (tabType, film) => {
  switch (tabType) {
    case Tab.OVERVIEW:
      return <TabsOverview film={film} />;
    case Tab.DETAILS:
      return <TabsDetails film={film}/>;
    case Tab.REVIEWS:
      return <TabsReviews/>;
    default:
      return null;
  }
};

class FilmTabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.film = this.props.film;
  }

  render() {
    const {activeTab, tabClickHandler} = this.props;
    const activeClass = `movie-nav__item--active`;
    const tabs = Object.values(TABS);

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {
              tabs.map((tab, i) => (
                <li key={`tab-${i}`} className={`movie-nav__item ${i === activeTab ? activeClass : ``}`}>
                  <a
                    href="#"
                    className="movie-nav__link"
                    data-tab={tab.type}
                    onClick={tabClickHandler}
                  >{tab.title}</a>
                </li>
              ))
            }
          </ul>
        </nav>

        {getTabContentByType(activeTab, this.film)}

      </div>
    );
  }
}

FilmTabs.propTypes = {
  activeTab: PropTypes.oneOf([...Object.values(Tab)]).isRequired,
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
