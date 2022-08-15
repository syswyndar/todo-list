import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "./middleware/logger";
import reducer from "./reducer/index";

export const store = createStore(reducer, applyMiddleware(logger, thunk));
