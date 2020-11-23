import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import {FilmGenres} from "../../../consts";

const initialState = {
  genres: [],
  activeGenre: FilmGenres.ALL_GENRES,
  isApplicationReady: false
};

const cinema = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });
    case ActionType.SET_APPLICATION_READY:
      return extend(state, {
        isApplicationReady: action.payload
      });
    default:
      return state;
  }
};

export {cinema};
