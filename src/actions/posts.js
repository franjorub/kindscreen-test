export const actionTypes = {
  LOADING_POSTS: "LOADING_POSTS",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR: "FETCH_POSTS_ERROR",
  STARRED_POST: "STARRED_POST",
  UNSTARRED_POST: "UNSTARRED_POST"
};

export const loadingPosts = () => ({
  type: actionTypes.LOADING_POSTS
});

export const fetchPostSuccess = posts => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  payload: posts
});

export const fetchPostsError = err => ({
  type: actionTypes.FETCH_POSTS_ERROR,
  payload: err
});

export const starredPost = id => ({
  type: actionTypes.STARRED_POST,
  payload: id
});

export const unStarredPost = id => ({
  type: actionTypes.UNSTARRED_POST,
  payload: id
});
