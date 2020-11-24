import {extend} from "../../../utils/common";
import {ActionType} from "../../action";

const initialState = {
  films: []
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });
    default:
      return state;
  }
};

export {data};
