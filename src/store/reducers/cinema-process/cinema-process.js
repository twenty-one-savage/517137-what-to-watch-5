import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import {FilmGenres} from "../../../consts";

const initialState = {
  genres: [],
  activeGenre: FilmGenres.ALL_GENRES
};

const cinemaProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        activeGenre: action.payload
      });
    default:
      return state;
  }
};

export {cinemaProcess};
