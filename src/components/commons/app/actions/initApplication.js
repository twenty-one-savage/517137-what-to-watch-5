import {fetchFilmList, checkAuth} from "../../../../store/api-actions";

export const initApplication = (dispatch) => {
  dispatch(fetchFilmList());
  dispatch(checkAuth());
};
