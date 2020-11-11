import tabsOverviewProps from "./tabs-overview.prop";

const TabsOverview = (props) => {
  const {rating, poll, producer, storyline, actors} = props.film;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating.value}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{rating.tag}</span>
          <span className="movie-rating__count">{poll} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{storyline}</p>

        <p className="movie-card__director"><strong>Director: {producer}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {actors.join(`, `)} and other</strong></p>
      </div>
    </>
  );
};

TabsOverview.propTypes = tabsOverviewProps;

export default TabsOverview;
