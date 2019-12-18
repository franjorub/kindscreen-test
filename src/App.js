import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Comments } from "./pages/Comments";
import { AuthContext } from "./contexts/auth";
import { PrivateRoute } from "./components/PrivateRoute";

const App = () => {
  const [loggedUser, setLoggedUser] = useState(null);

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
      <Router>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/welcome" component={Home} />
        <PrivateRoute path="/post/:id/comments" component={Comments} />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
