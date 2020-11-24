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
};

export const APIRoute = {
  FILMS: `/films`,
  LOGIN: `/login`
};

export const HttpCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};
