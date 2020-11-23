import tabsOverviewProps from "./tabs-overview.prop";
import {createRatingTag} from "../../../../utils/common";

const TabsOverview = (props) => {
  const {
    rating,
    scores_count: scoresCount,
    director,
    description,
    starring
  } = props.film;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{createRatingTag(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
      </div>
    </>
  );
};

TabsOverview.propTypes = tabsOverviewProps;

export default TabsOverview;
