import React, { Component } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Publicadores from "./pages/Publicadores";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/publicadores" exact component={Publicadores}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
