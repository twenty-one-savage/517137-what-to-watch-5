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
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const addReview = (filmId, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENTS + filmId, {rating, comment})
    .then(() => dispatch(redirectToRoute(AppRoute.FILMS + filmId)))
);
