import {
  SET_ACTIVITY,
  SET_TODO_LIST,
  SET_ACTIVITY_DETAIL,
  SET_ACTIVITY_ERROR,
  SET_ACTIVITY_LOADING,
} from "../actionType/index";
import Axios from "axios";
import { BASE_URL } from "../../api/constant";

const setActivity = (payload) => {
  return {
    type: SET_ACTIVITY,
    payload,
  };
};
const setTodoList = (payload) => {
  return {
    type: SET_TODO_LIST,
    payload,
  };
};

const setActivityDetail = (payload) => {
  return {
    type: SET_ACTIVITY_DETAIL,
    payload,
  };
};

const setActivityLoading = (payload) => {
  return {
    type: SET_ACTIVITY_LOADING,
    payload,
  };
};

const setActivityError = (payload) => {
  return {
    type: SET_ACTIVITY_ERROR,
    payload,
  };
};

export const getAllActivity = () => {
  return async (dispatch) => {
    dispatch(setActivityLoading(true));
    dispatch(setActivityError(false));
    try {
      let { data } = await Axios.get(
        `${BASE_URL}/activity-groups?email=sysswyndar@gmail.com`
      );
      dispatch(setActivity(data.data));
    } catch (err) {
      console.log(err);
      dispatch(setActivityError(err));
    } finally {
      dispatch(setActivityLoading(false));
    }
  };
};

export const getActivityById = (id) => {
  return async (dispatch) => {
    dispatch(setActivityLoading(true));
    dispatch(setActivityError(false));
    try {
      let { data } = await Axios.get(`${BASE_URL}/activity-groups/${id}`);
      console.log(data, "ini data");
      dispatch(setActivityDetail(data));
      dispatch(setTodoList(data.todo_items));
      return data;
    } catch (err) {
      console.log(err);
      dispatch(setActivityError(err));
    } finally {
      dispatch(setActivityLoading(false));
    }
  };
};

export const createActivity = (payload) => {
  return async (dispatch) => {
    dispatch(setActivityLoading(true));
    dispatch(setActivityError(false));
    try {
      let { data } = await Axios.post(`${BASE_URL}/activity-groups`, payload);
      return data;
    } catch (err) {
      console.log(err);
      dispatch(setActivityError(err));
    } finally {
      dispatch(setActivityLoading(false));
    }
  };
};

export const updateActivity = (id, payload) => {
  return async (dispatch) => {
    dispatch(setActivityLoading(true));
    dispatch(setActivityError(false));
    try {
      let { data } = await Axios.patch(
        `${BASE_URL}/activity-groups/${id}`,
        payload
      );
      return data;
    } catch (err) {
      console.log(err);
      dispatch(setActivityError(err));
    } finally {
      dispatch(setActivityLoading(false));
    }
  };
};

export const deleteActivity = (id) => {
  return async (dispatch) => {
    dispatch(setActivityLoading(true));
    dispatch(setActivityError(false));
    try {
      let { data } = await Axios.delete(`${BASE_URL}/activity-groups/${id}`);
      return data;
    } catch (err) {
      console.log(err);
      dispatch(setActivityError(err));
    } finally {
      dispatch(setActivityLoading(false));
    }
  };
};
