import {extend} from "../../../utils/common";
import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../consts";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });
    case ActionType.LOAD_USER_DATA:
      return extend(state, {
        userData: action.payload
      });
    default:
      return state;
  }
};

export {user};
