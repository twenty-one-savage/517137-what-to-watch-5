import {createStore} from 'redux';
import rootReducer from 'store/reducers/root-reducer';
import {setPromoFilm} from "./store/action";

export const noop = () => {};
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

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const store = createStore(rootReducer);
store.dispatch(setPromoFilm(FILM));
export {store};
