import {extend} from "../../../utils/common";
import {ActionType} from "../../action";

const initialState = {
  films: [],
  promoFilm: {}
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
    default:
      return state;
  }
};

export {data};
