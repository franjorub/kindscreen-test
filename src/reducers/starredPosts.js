import { actionTypes } from "../actions/posts";

export const initialStateStarredPosts = [];

export const starredPostsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.STARRED_POST:
      return [...state, action.payload];
    case actionTypes.UNSTARRED_POST:
      return state.filter(key => key !== action.payload);
    default:
      throw new Error();
  }
};
