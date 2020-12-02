import TabOverview from "./tab-overview/tab-overview";
import TabDetails from "./tab-details/tab-details";
import TabReviews from "./tab-reviews/tab-reviews";
import {TabsType} from "../../../consts";

import filmTabsProp from "./film-tabs.prop";

const getTabContentByType = (tabType, film) => {
  switch (tabType) {
    case TabsType.OVERVIEW:
      return <TabOverview film={film}/>;
    case TabsType.DETAILS:
      return <TabDetails film={film}/>;
    case TabsType.REVIEWS:
      return <TabReviews/>;
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

FilmTabs.propTypes = filmTabsProp;

export default FilmTabs;
