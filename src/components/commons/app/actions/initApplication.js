import {fetchFilmList, checkAuth, fetchPromoFilm} from "../../../../store/api-actions";
import {setApplicationReady} from "../../../../store/action";

export const initApplication = () => async (dispatch) => {
  await Promise.all([
    dispatch(fetchPromoFilm()),
    dispatch(fetchFilmList())
  ]);
  dispatch(checkAuth());
  dispatch(setApplicationReady());
};
