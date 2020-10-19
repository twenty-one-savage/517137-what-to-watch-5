export const ActionType = {
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`
};

export const ActionCreator = {
  changeActiveFilter: (genreForFilter) => ({
    type: ActionType.CHANGE_FILTER_BY_GENRE,
    payload: genreForFilter,
  }),
  changeFilmList: (genreForFilter) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: genreForFilter
  })
};
