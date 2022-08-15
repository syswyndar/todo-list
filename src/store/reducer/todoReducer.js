import {
  SET_TODO_LIST,
  SET_TODO_LIST_ERROR,
  SET_TODO_LIST_LOADING,
} from "../actionType/index";

const initialStates = {
  todos: [],
  error: null,
  loading: false,
};

const todoReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case SET_TODO_LIST:
      return {
        ...state,
        todos: payload,
      };
    case SET_TODO_LIST_ERROR:
      return {
        ...state,
        error: payload,
      };
    case SET_TODO_LIST_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
