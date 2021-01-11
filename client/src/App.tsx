import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './components/home/Home';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
