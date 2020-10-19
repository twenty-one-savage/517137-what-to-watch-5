import {extend} from "../utils/common";
import {ActionsType} from "./action";

const initialState = {
  genre: ``,
  films: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.CHANGE_FILTER:
      return extend(state, {
        genre: action.payload
      });
    case ActionsType.GET_FILMS:
      return extend(state, {
        films: action.payload.slice().filter((film) => film.genre === state.genre)
      });
    default:
      return state;
  }
};

export {reducer};
