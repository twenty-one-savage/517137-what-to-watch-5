import {combineReducers} from "redux";
import {user} from "./user/user";
import {cinemaData} from "./cinema-data/cinema-data";
import {cinemaProcess} from "./cinema-process/cinema-process";

export const NameSpace = {
  DATA: `DATA`,
  CINEMA: `CINEMA`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.DATA]: cinemaData,
  [NameSpace.CINEMA]: cinemaProcess
});