export const Film = {
  COUNT: {
    main: 8
  },
  RATING: {
    min: 0,
    max: 10
  },
  REVIEWS: {
    COUNT: {
      main: 4
    },
    RATING: {
      min: 0,
      max: 10
    }
  },
  SAME_FILMS: {
    count: 4
  }
};

export const FilmGenres = {
  ALL_GENRES: `All Genres`,
  MAX_COUNT: 9
};

export const HeaderClasses = {
  USER_PAGE_HEAD: `user-page__head`,
  MOVIE_CARD_HEAD: `movie-card__head`
};

export const LogoClasses = {
  LOGO_LINK_LIGHT: `logo__link--light`
};

export const HeaderTitles = {
  MY_LIST: `My list`,
  SIGN_IN: `Sign in`
};

export const TabsType = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

export const AppRoute = {
  ROOT: `/`,
  MY_LIST: `/mylist`,
  LOGIN: `/login`,
  FILMS: `/films/`,
  FILMS_PROMO: `/films/promo`
};

export const APIRoute = {
  FILMS: `/films`,
  LOGIN: `/login`,
  COMMENTS: `/comments/`
};

export const HttpCode = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};

export const CommentLength = {
  MIN: 50,
  MAX: 400
};
