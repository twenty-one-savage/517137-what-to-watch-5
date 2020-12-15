import {fetchFilmList, checkAuth, fetchPromoFilm} from "../../../../store/api-actions";
import {setApplicationReady} from "../../../../store/action";

export const initApplication = () => (dispatch) => {
  Promise.all([
    dispatch(fetchPromoFilm()),
    dispatch(fetchFilmList())
  ]).then(() => {
    // dispatch(checkAuth());
    dispatch(setApplicationReady());
  });
};
