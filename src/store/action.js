export const ActionType = {
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  SET_FILMS: `SET_FILMS`,
  SET_PROMO_FILM: `SET_PROMO_FILM`,
  UPDATE_FILM: `UPDATE_FILM`,
  UPDATE_PROMO_FILM: `UPDATE_PROMO_FILM`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_APPLICATION_READY: `SET_APPLICATION_READY`,
  SHOW_SERVER_ERROR: `SHOW_SERVER_ERROR`,
  LOAD_COMMENTS: `LOAD_COMMENTS`
};

export const changeActiveFilter = (genreForFilter) => ({
  type: ActionType.CHANGE_FILTER_BY_GENRE,
  payload: genreForFilter,
});

export const setFilms = (films) => ({
  type: ActionType.SET_FILMS,
  payload: films,
});

export const setPromoFilm = (film) => ({
  type: ActionType.SET_PROMO_FILM,
  payload: film,
});

export const requiredAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const setApplicationReady = (isReady = true) => ({
  type: ActionType.SET_APPLICATION_READY,
  payload: isReady,
});

export const loadFilmComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

export const updateFilm = (film) => ({
  type: ActionType.UPDATE_FILM,
  payload: film,
});
