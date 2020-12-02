import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api/api";
import {data} from "./data";
import * as action from "../../action";
import * as apiAction from "../../api-actions";
import * as mock from "../../../mock-test";
import {APIRoute} from "../../../consts";

const api = createAPI(() => {});

describe(`Film Reducer testing`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(data(void 0, {})).toEqual({
      films: [],
      promoFilm: {},
      comments: []
    });
  });

  it(`Reducer set-promo by set-promo film`, () => {
    expect(data({
      promoFilm: {},
    }, {
      type: action.ActionType.SET_PROMO_FILM,
      payload: mock.FILM,
    })).toEqual({
      promoFilm: mock.FILM
    });
  });
});

describe(`Testing related to films async operations`, () => {

  it(`makes a correct API call for films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = apiAction.fetchFilmList();

    apiMock
      .onGet(`/films`)
      .reply(200, mock.FILMS);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: action.ActionType.SET_FILMS,
          payload: mock.FILMS,
        });
      });
  });

  it(`makes a correct API call for promo-film`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = apiAction.fetchPromoFilm();

    apiMock
      .onGet(APIRoute.FILMS_PROMO)
      .reply(200, mock.FILM);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: action.ActionType.SET_PROMO_FILM,
          payload: mock.FILM,
        });
      });
  });
});

