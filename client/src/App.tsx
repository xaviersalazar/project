import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Client } from "./components/client/Client";
import { Home } from "./components/home/Home";

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:id">
        <Client />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
