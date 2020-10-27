import TabsOverview from "./tabs-overview/tabs-overview";
import TabsDetails from "./tabs-details/tabs-details";
import TabsReviews from "./tabs-reviews/tabs-reviews";

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.film = this.props.film;
    this.state = {
      activeTab: 0
    };

    this._handleTabClick = this._handleTabClick.bind(this);
  }

  _handleTabClick(evt) {
    evt.preventDefault();
    const newActiveTab = evt.target.dataset.tab;
    this.setState({
      activeTab: +newActiveTab
    });
  }

  render() {
    const {activeTab} = this.state;
    const activeClass = `movie-nav__item--active`;
    const titles = [
      {
        title: `Overview`
      },
      {
        title: `Details`
      },
      {
        title: `Reviews`
      }
    ];
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {
              titles.map((el, i) => (
                <li key={`tab-${i}`} className={`movie-nav__item ${i === activeTab ? activeClass : ``}`}>
                  <a
                    href="#"
                    className="movie-nav__link"
                    data-tab={i}
                    onClick={this._handleTabClick}
                  >{el.title}</a>
                </li>
              ))
            }
          </ul>
        </nav>

        {activeTab === 0 && <TabsOverview
          rating={this.film.rating}
          poll={this.film.poll}
          producer={this.film.producer}
          storyline={this.film.storyline}
          actors={this.film.actors}
        />}

        {activeTab === 1 && <TabsDetails
          producer={this.film.producer}
          actors={this.film.actors}
          duration={this.film.duration}
          genres={this.film.genres}
          year={this.film.year}
        />}

        {activeTab === 2 && <TabsReviews/>}

      </div>
    );
  }
}

Tabs.propTypes = {
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
  })
};

export default Tabs;
