import {
  SET_ACTIVITY,
  SET_ACTIVITY_DETAIL,
  SET_ACTIVITY_ERROR,
  SET_ACTIVITY_LOADING,
} from "../actionType/index";

const initialStates = {
  activities: [],
  activityDetail: null,
  error: null,
  loading: false,
};

const activityReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case SET_ACTIVITY:
      return {
        ...state,
        activities: payload,
      };
    case SET_ACTIVITY_DETAIL:
      return {
        ...state,
        activityDetail: payload,
      };
    case SET_ACTIVITY_ERROR:
      return {
        ...state,
        error: payload,
      };
    case SET_ACTIVITY_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};

export default activityReducer;
