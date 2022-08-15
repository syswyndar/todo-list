import activityReducer from "./activityReducer";
import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  activities: activityReducer,
  todos: todoReducer,
});

export default reducer;
