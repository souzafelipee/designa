import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Designacoes from "./pages/Designacoes";
import Publicadores from "./pages/Publicadores";
import PublicadoresBar from "./pages/PublicadoresBar";
import ListaPublicadores from "./components/ListaPublicadores";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/publicadores" exact component={Publicadores}/>
          <Route path="/designacoes" exact component={Designacoes}/>
          <Route path="/publicadoresBar" exact component={PublicadoresBar}/>
          <Route path="/listaPublicadores" exact component={ListaPublicadores}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
