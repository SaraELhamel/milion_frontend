import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import SignInadmin from "./components/admin.component";
import Dashboard from "./components/dashboardComponent";
import Dashboard1 from "./components/dashboardpartComponent";
import Group from "./components/groupComponent";
import Game from "./components/gameComponent";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          {/* <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/admin" component={SignInadmin} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/dashboardpart" component={Dashboard1} />
            <Route path="/groupe" component={Group} />
            <Route path="/game" component={Game} />
            
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
