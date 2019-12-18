import { actionTypes } from "../actions/posts";

export const initialStateStarredPosts = [];

export const starredPostsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.STARRED_POST:
      const newState = [...state, action.payload];
      localStorage.setItem("starredPosts", JSON.stringify(newState));
      return newState;
    case actionTypes.UNSTARRED_POST:
      const nextState = state.filter(key => key !== action.payload);
      localStorage.setItem("starredPosts", JSON.stringify(nextState));
      return nextState;
    default:
      throw new Error();
  }
};
