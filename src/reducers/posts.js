import { actionTypes } from "../actions/posts";

export const initialPostState = {
  entities: {},
  keys: [],
  loading: false,
  err: null
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_SUCCESS:
      return { ...action.payload, loading: false, err: null };
    case actionTypes.FETCH_POSTS_ERROR:
      return {
        ...state,
        err: action.payload
      };
    case actionTypes.LOADING_POSTS:
      return { ...state, loading: true };

    default:
      throw new Error();
  }
};
