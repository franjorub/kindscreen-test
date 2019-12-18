import { createContext, useContext } from "react";

export const StarredPostsContext = createContext();

export const useStarredPosts = () => useContext(StarredPostsContext);
