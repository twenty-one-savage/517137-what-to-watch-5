import {extend, updateFilm} from "../../../utils/common";
import {ActionType} from "../../action";

const initialState = {
  films: [],
  promoFilm: {},
  comments: []
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILMS:
      return extend(state, {
        films: action.payload
      });
    case ActionType.SET_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload
      });
    case ActionType.UPDATE_FILM:
      return extend(state, {
        films: updateFilm(state.films, action.payload)
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
    default:
      return state;
  }
};

export {data};
