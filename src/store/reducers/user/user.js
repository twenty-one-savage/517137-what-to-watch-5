import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../consts";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });
    default:
      return state;
  }
};

export {user};
