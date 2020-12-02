import {setFilms, setPromoFilm, requiredAuthorization, redirectToRoute, loadFilmComments, updateFilm} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../consts";
import {toggleFavoriteStatus} from "../utils/common";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(setFilms(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS_PROMO)
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

export const changeFilmStatus = (filmId, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE + filmId}/${toggleFavoriteStatus(status)}`)
    .then(({data}) => dispatch(updateFilm(data)))
);


export const fetchFilmComments = (filmId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS + filmId}`)
    .then(({data}) => dispatch(loadFilmComments(data)))
);
