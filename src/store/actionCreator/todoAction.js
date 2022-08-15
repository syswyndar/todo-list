import {
  SET_TODO_LIST,
  SET_TODO_LIST_ERROR,
  SET_TODO_LIST_LOADING,
} from "../actionType/index";
import Axios from "axios";
import { BASE_URL } from "../../api/constant";

const setTodoActivity = (payload) => {
  return {
    type: SET_TODO_LIST,
    payload,
  };
};

const setTodoActivityLoading = (payload) => {
  return {
    type: SET_TODO_LIST_LOADING,
    payload,
  };
};

const setTodoActivityError = (payload) => {
  return {
    type: SET_TODO_LIST_ERROR,
    payload,
  };
};

export const getAllTodo = (id) => {
  return async (dispatch) => {
    dispatch(setTodoActivityLoading(true));
    dispatch(setTodoActivityError(false));
    try {
      let { data } = await Axios.get(
        `${BASE_URL}/todo-items?activity_group_id=${id}`
      );
      //   console.log(data, "ini data todo");
      dispatch(setTodoActivity(data.data));
      return data;
    } catch (err) {
      console.log(err);
      dispatch(setTodoActivityError(err));
    } finally {
      dispatch(setTodoActivityLoading(false));
    }
  };
};

export const createTodo = (payload) => {
  return async (dispatch) => {
    dispatch(setTodoActivityLoading(true));
    dispatch(setTodoActivityError(false));
    try {
      console.log(payload, "ini data payload di action creator");
      let { data } = await Axios.post(`${BASE_URL}/todo-items`, payload);
      return data;
    } catch (err) {
      console.log(err);
      dispatch(setTodoActivityError(err));
    } finally {
      dispatch(setTodoActivityLoading(false));
    }
  };
};

export const sortingTodo = (title) => {
  return async (dispatch, getState) => {
    dispatch(setTodoActivityLoading(true));
    dispatch(setTodoActivityError(false));
    try {
      let { todos } = getState();
      let newTodos;
      if (title === "terlama") {
        newTodos = todos.todos.sort((a, b) => {
          return a.id - b.id;
        });
      } else if (title === "terbaru") {
        newTodos = todos.todos.sort((a, b) => {
          return b.id - a.id;
        });
      } else if (title === "a-z") {
        newTodos = todos.todos.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      } else if (title === "z-a") {
        newTodos = todos.todos.sort((a, b) => {
          return b.title.localeCompare(a.title);
        });
      } else if (title === "belum-selesai") {
        newTodos = todos.todos
          .filter((item) => {
            return item.is_active === 1;
          })
          .sort((a, b) => {
            return b.id - a.id;
          });
      }
      dispatch(setTodoActivity(newTodos));
    } catch (err) {
      console.log(err);
      dispatch(setTodoActivityError(err));
    } finally {
      dispatch(setTodoActivityLoading(false));
    }
  };
};

export const updateTodo = (id, payload) => {
  return async (dispatch) => {
    dispatch(setTodoActivityLoading(true));
    dispatch(setTodoActivityError(false));
    try {
      let { data } = await Axios.patch(`${BASE_URL}/todo-items/${id}`, payload);
      return data;
    } catch (err) {
      console.log(err);
      dispatch(setTodoActivityError(err));
    } finally {
      dispatch(setTodoActivityLoading(false));
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch(setTodoActivityLoading(true));
    dispatch(setTodoActivityError(false));
    try {
      let { data } = await Axios.delete(`${BASE_URL}/todo-items/${id}`);
      return data;
    } catch (err) {
      console.log(err);
      dispatch(setTodoActivityError(err));
    } finally {
      dispatch(setTodoActivityLoading(false));
    }
  };
};
