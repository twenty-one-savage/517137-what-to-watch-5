import {Link} from "react-router-dom";

import Header from "../../commons/sections/header/header";
import Footer from "../../commons/sections/footer/footer";
import FilmTabs from "../../commons/film-tabs/film-tabs";
import ListSameFilms from "../../commons/lists/list-same-films/list-same-films.connect";
import BtnPlay from "../../commons/btn-play/btn-play";
import withActiveTab from "../../../hocs/with-active-tab/with-active-tab";

import {AuthorizationStatus, HeaderClasses} from "../../../consts";
import filmScreenProp from "./film-screen.prop";


const FilmScreenWithActiveTab = withActiveTab(FilmTabs);

const FilmScreen = (props) => {
  const {film, btnPlayHandler, authorizationStatus} = props;
  const {
    id,
    name,
    poster_image: posterImage,
    released,
    genre,
    background_image: backgroundImage,
    background_color: backgroundColor
  } = film;

  return (
      <>
        <section className="movie-card movie-card--full" style={{
          backgroundColor
        }}>
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt={name}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header additionalClassNames={[HeaderClasses.MOVIE_CARD_HEAD]} logoIsLink={true} />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>

                <div className="movie-card__buttons">
                  <BtnPlay id={id} btnPlayHandler={btnPlayHandler}/>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add" />
                    </svg>
                    <span>My list</span>
                  </button>
                  {authorizationStatus === AuthorizationStatus.AUTH ? <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link> : null}
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={posterImage} alt={name} width="218" height="327"/>
              </div>
              <FilmScreenWithActiveTab film={film}/>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <ListSameFilms genre={genre}/>
          </section>

          <Footer />
        </div>
      </>
  );
};

FilmScreen.propTypes = filmScreenProp;

export default FilmScreen;
