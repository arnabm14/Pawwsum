import {
  FETCH_RECOMMEND_REQUEST,
  FETCH_RECOMMEND_SUCCESS,
  FETCH_RECOMMEND_FAILURE,
} from "./recommendationActionTypes";

const intialState = {
  loading: true,
  data: [],
  error: "",
};

const recommendationReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_RECOMMEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RECOMMEND_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_RECOMMEND_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default recommendationReducer;
