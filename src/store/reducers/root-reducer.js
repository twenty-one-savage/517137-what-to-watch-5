import {combineReducers} from "redux";
import {user} from "./user/user";
import {data} from "./data/data";
import {cinema} from "./cinema/cinema";

export const NameSpace = {
  USER: `USER`,
  DATA: `DATA`,
  CINEMA: `CINEMA`,
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.DATA]: data,
  [NameSpace.CINEMA]: cinema
});
