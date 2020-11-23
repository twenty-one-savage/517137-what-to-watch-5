export const ActionType = {
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_APPLICATION_READY: `SET_APPLICATION_READY`
};

export const changeActiveFilter = (genreForFilter) => ({
  type: ActionType.CHANGE_FILTER_BY_GENRE,
  payload: genreForFilter
});

export const setFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

export const requiredAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

export const setApplicationReady = (isReady = true) => ({
  type: ActionType.SET_APPLICATION_READY,
  payload: isReady
});
