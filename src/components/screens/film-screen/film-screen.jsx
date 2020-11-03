import {Link} from "react-router-dom";

import Header from "../../commons/sections/header/header";
import Footer from "../../commons/sections/footer/footer";
import FilmTabs from "../../commons/film-tabs/film-tabs";
import ListSameFilms from "../../commons/lists/list-same-films/list-same-films";

import withSwitchableTabs from "../../../hocs/with-active-tab/with-switchable-tabs";

import {filmsType} from "../../../commonPropTypes";
import {HeaderClasses} from "../../../consts";

const FilmScreenWithSwitchableTabs = withSwitchableTabs(FilmTabs);

const FilmScreen = (props) => {
  const {films, match, history} = props;
  const filmId = match.params.id;

  const currentFilm = films.find((film) => film.id === filmId);
  const {title, poster, year, genres, background} = currentFilm;
  const btnPlayHandler = () => {
    history.push(`/player/${filmId}`);
  };

  return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={background} alt={title}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header className={HeaderClasses.MOVIE_CARD_HEAD} />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genres.join(`, `)}</span>
                  <span className="movie-card__year">{year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button" onClick={btnPlayHandler}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add" />
                    </svg>
                    <span>My list</span>
                  </button>
                  <Link to={`/films/${filmId}/review`} className="btn movie-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={poster} alt={title} width="218" height="327"/>
              </div>
              <FilmScreenWithSwitchableTabs film={currentFilm}/>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <ListSameFilms films={films} genre={genres[0]}/>
          </section>

          <Footer />
        </div>
      </>
  );
};

FilmScreen.propTypes = filmsType;

export default FilmScreen;
