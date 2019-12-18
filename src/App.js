import React, { useState, useEffect, useReducer } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Comments } from "./pages/Comments";
import { PrivateRoute } from "./components/PrivateRoute";
import { AuthContext } from "./contexts/auth";
import { PostsContext } from "./contexts/posts";
import { StarredPostsContext } from "./contexts/starredPosts";
import { initialPostState, postReducer } from "./reducers/posts";
import {
  starredPostsReducer,
  initialStateStarredPosts
} from "./reducers/starredPosts";

const App = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [posts, dispatchToPosts] = useReducer(postReducer, initialPostState);
  const [starredPosts, dispatchToStarredPosts] = useReducer(
    starredPostsReducer,
    initialStateStarredPosts
  );

  useEffect(() => {
    const checkLocalSession = async () => {
      const localUser = localStorage.getItem("user");
      if (localUser) {
        const user = await JSON.parse(localUser);
        setLoggedUser(user);
      }
    };

    checkLocalSession();
  }, []);

  const authUser = user => {
    localStorage.setItem("user", JSON.stringify(user));
    setLoggedUser(user);
  };

  return (
    <AuthContext.Provider value={{ loggedUser, authUser }}>
      <PostsContext.Provider value={[posts, dispatchToPosts]}>
        <StarredPostsContext.Provider
          value={[starredPosts, dispatchToStarredPosts]}
        >
          <Router basename="/">
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/welcome" component={Home} />
            <PrivateRoute path="/post/:id/comments" component={Comments} />
          </Router>
        </StarredPostsContext.Provider>
      </PostsContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
