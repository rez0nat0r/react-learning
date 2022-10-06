import { combineReducers } from "redux";

import teacher from "./teacher";
import courses from "./courses";

export default combineReducers({
  teacher,
  courses,
});
