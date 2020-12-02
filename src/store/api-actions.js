import {setFilms, setPromoFilm, requiredAuthorization, redirectToRoute, setApplicationReady} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../consts";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(setFilms(data)))
    .then(() => dispatch(setApplicationReady()))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/promo`)
    .then(({data}) => dispatch(setPromoFilm(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
<<<<<<< Updated upstream
=======
    .then(({data}) => dispatch(loadUserData(data)))
>>>>>>> Stashed changes
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      dispatch(redirectToRoute(AppRoute.ROOT));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

<<<<<<< Updated upstream
export const addReview = (filmId, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENTS + filmId, {rating, comment})
=======
export const addReview = (filmId, {reviewRating, reviewText}, error) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENTS + filmId, {rating: reviewRating, comment: reviewText})
>>>>>>> Stashed changes
    .then(() => dispatch(redirectToRoute(AppRoute.FILMS + filmId)))
    .catch((err) => {
      if (err) {
        dispatch(error);
      }
    })
);
