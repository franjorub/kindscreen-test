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
    case actionTypes.STARRED_POST:
      const post = { ...state.entities[action.payload] };
      post.isStarred = true;
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload]: post
        }
      };
    case actionTypes.UNSTARRED_POST:
      const postCopy = { ...state.entities[action.payload] };
      postCopy.isStarred = false;
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload]: postCopy
        }
      };
    default:
      throw new Error();
  }
};
