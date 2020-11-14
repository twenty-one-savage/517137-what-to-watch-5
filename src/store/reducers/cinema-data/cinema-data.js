import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import {allFilms} from "../../../mocks/films";

const initialState = {
  films: allFilms
};

const cinemaData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });
    default:
      return state;
  }
};

export {cinemaData};
