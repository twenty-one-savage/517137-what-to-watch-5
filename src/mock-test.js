import configureMockStore from "redux-mock-store";
import {createStore} from 'redux';
import rootReducer from 'store/reducers/root-reducer';
import {setPromoFilm} from "./store/action";

const mockStore = configureMockStore();
const store = createStore(rootReducer);
export const noop = () => {};
export const USER_DATA = {login: `my@mail.ru`, password: `kooliman`};
export const VISIBLE_MOVIES_COUNT = 16;
export const ID = 1;
export const RATING_STARS = [false, false, true, false, false];
export const TAB = `details`;
export const PREVIEW = `img/aviator.jpg`;
export const PREVIEW_VIDEO = `https://upload.wikimedia.org/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
export const TITLE = `Bohemian Rhapsody`;
export const CURRENT_GENRE = `Comedy`;
export const ALL_GENRES = `All genres`;
export const GENRES = [`Comedy`, `Crime`, `Documentary`, `Drama`, `Horror`, `Kids & Family`];
export const MATCH = {params: {id: 1}};
export const PARAMS = {id: 1};

export const FILMS = [
  {
    "id": 1,
    "name": `Bronson`,
    "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    "background_color": `#73B39A`,
    "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "description": `A young man who was sentenced to seven years`,
    "rating": 3.6,
    "scores_count": 109661,
    "director": `Nicolas Winding Refn`,
    "starring": [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
    "run_time": 92,
    "genre": `Action`,
    "released": 2008,
    "is_favorite": true
  },
  {
    "id": 2,
    "name": `Matrix`,
    "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/matrix.jpg`,
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/matrix.jpg`,
    "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/matrix.jpg`,
    "background_color": `#73B39A`,
    "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    "preview_video_link": `https://upload.wikimedia.org/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    "description": `A young man who was sentenced to seven years`,
    "rating": 8.6,
    "scores_count": 109661,
    "director": `Nicolas Winding Refn`,
    "starring": [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
    "run_time": 92,
    "genre": `Action`,
    "released": 2008,
    "is_favorite": true
  },
];

export const FILM = {
  "id": 5,
  "name": `Pumping`,
  "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
  "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/pulp-fiction.jpg`,
  "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Pulp_Fiction.jpg`,
  "background_color": `#795433`,
  "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  "preview_video_link": `https://upload.wikimedia.org/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  "description": `A young man who was sentenced to seven years`,
  "rating": 8.6,
  "scores_count": 109661,
  "director": `Nicolas Winding Refn`,
  "starring": [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
  "run_time": 92,
  "genre": `Action`,
  "released": 2008,
  "is_favorite": true
};


export const REVIEWS = [
  {
    id: 111,
    rating: 3.3,
    date: `2020-10-09T13:38:44.769Z`,
    author: `Christina`,
    message: `This film is an experience and i has already seen it 4 times`,
  },
  {
    id: 222,
    rating: 3.3,
    date: `2020-10-09T13:38:44.769Z`,
    author: `Christina`,
    message: `This film is an experience and i has already seen it 4 times`,
  }
];

export const MockComponent = (props) => {
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
};

export const activeState = {
  reviewRating: ``,
  reviewText: ``,
  error: false,
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export const storeAuth = mockStore({
  USER: {
    userData: {
      data: {
        id: 1,
        email: `DonCaron@gmail.com`,
        name: `DonCaron`,
        avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`
      }
    },
    authorizationStatus: `AUTH`
  },
  DATA: {
    film: {
      title: `Mind Hunter`,
      genre: `Mystery`,
      releaseDate: 2005,
      poster: `/img/the-grand-budapest-hotel-poster.jpg`,
      preview: `/img/mindhunter.jpg`,
      backgroundPoster: `/img/bg-header.jpg`,
      description: `FBI agent tries to solve murders all around the USA`,
      rating: 10.0,
      ratingAmount: 350,
      director: `Dan Desk`,
      cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
      runningTime: 50,
      filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      id: 3,
      backgroundColor: `#73B39A`,
      fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      isFavorite: false,
    },
    films: [
      {
        title: `Fantastic Beasts`,
        genre: `Fantasy`,
        releaseDate: 2018,
        poster: `/img/the-grand-budapest-hotel-poster.jpg`,
        preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        backgroundPoster: `/img/bg-header.jpg`,
        description: `New amazing story from J.K.Rowling, new adventures in wizards world`,
        rating: 10.0,
        ratingAmount: 500,
        director: `Curt Russel`,
        cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
        runningTime: 20,
        filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        id: 1,
        backgroundColor: `#73B39A`,
        fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        isFavorite: false,

      },
      {
        title: `Zombi Jack`,
        genre: `Horror`,
        releaseDate: 2020,
        poster: `/img/the-grand-budapest-hotel-poster.jpg`,
        preview: `/img/midnight-special.jpg`,
        backgroundPoster: `/img/bg-header.jpg`,
        description: `New flash eating virus trying to destory the world`,
        rating: 5.5,
        ratingAmount: 30,
        director: `Wes Kraven`,
        cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
        runningTime: 30,
        filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        id: 2,
        backgroundColor: `#73B39A`,
        fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        isFavorite: false,

      },
      {
        title: `Mind Hunter`,
        genre: `Mystery`,
        releaseDate: 2005,
        poster: `/img/the-grand-budapest-hotel-poster.jpg`,
        preview: `/img/mindhunter.jpg`,
        backgroundPoster: `/img/bg-header.jpg`,
        description: `FBI agent tries to solve murders all around the USA`,
        rating: 10.0,
        ratingAmount: 350,
        director: `Dan Desk`,
        cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
        runningTime: 40,
        filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        id: 3,
        backgroundColor: `#73B39A`,
        fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        isFavorite: false,

      },
    ]
  }
});

store.dispatch(setPromoFilm(FILM));
export {store};
