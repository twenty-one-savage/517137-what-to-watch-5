import {combineReducers} from "redux";
import {user} from "./user/user";
import {cinemaData} from "./cinema-data/cinema-data";
import {cinemaProcess} from "./cinema-process/cinema-process";

export const NameSpace = {
  USER: `USER`,
  DATA: `DATA`,
  CINEMA: `CINEMA`,
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.DATA]: cinemaData,
  [NameSpace.CINEMA]: cinemaProcess
});
