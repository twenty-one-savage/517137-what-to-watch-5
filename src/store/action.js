export const ActionType = {
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
};

export const changeActiveFilter = (genreForFilter) => ({
  type: ActionType.CHANGE_FILTER_BY_GENRE,
  payload: genreForFilter
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

export const requiredAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});
