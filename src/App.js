import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { AuthContext } from "./contexts/auth";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Login Page</Link>
            </li>
            <li>
              <Link to="/welcome">Home Page</Link>
            </li>
          </ul>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/welcome" component={Home} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
