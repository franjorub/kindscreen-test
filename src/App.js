import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Comments } from "./pages/Comments";
import { PrivateRoute } from "./components/PrivateRoute";
import { AuthContext } from "./contexts/auth";
import { PostsContext } from "./contexts/posts";
import { initialPostState, postReducer } from "./reducers/posts";

const App = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [posts, dispatchToPosts] = useReducer(postReducer, initialPostState);

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
        <Router>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/welcome" component={Home} />
          <PrivateRoute path="/post/:id/comments" component={Comments} />
        </Router>
      </PostsContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
