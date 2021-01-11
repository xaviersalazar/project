import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Client } from "./components/client/Client";
import { Home } from "./components/home/Home";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id">
          <Client />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
