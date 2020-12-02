import * as action from "./action";
import * as mock from "../mock-test";

describe(`Action creators work correctly`, () => {

  it(`Action creator for get films returns correct action`, () => {
    expect(action.setFilms(mock.FILMS)).toEqual({
      type: action.ActionType.SET_FILMS,
      payload: mock.FILMS,
    });
  });

  it(`Action creator for change active genre returns correct action`, () => {
    expect(action.changeActiveFilter(`Cartoon`)).toEqual({
      type: action.ActionType.CHANGE_FILTER_BY_GENRE,
      payload: `Cartoon`,
    });
  });

  it(`Action creator for set promo-film returns correct action`, () => {
    expect(action.setPromoFilm(mock.FILM)).toEqual({
      type: action.ActionType.SET_PROMO_FILM,
      payload: mock.FILM,
    });
  });

  it(`Action creator for set App ready returns correct action`, () => {
    expect(action.setApplicationReady()).toEqual({
      type: action.ActionType.SET_APPLICATION_READY,
      payload: true
    });
  });

  it(`Action creator for get authorization returns correct action`, () => {
    expect(action.requiredAuthorization(`AUTH`)).toEqual({
      type: action.ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`
    });
  });

  it(`Action creator for redirect to route returns correct action`, () => {
    expect(action.redirectToRoute(`/`)).toEqual({
      type: action.ActionType.REDIRECT_TO_ROUTE,
      payload: `/`,
    });
  });
});
