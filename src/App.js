import React from "react";
import "./App.css";
import { Homepage } from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";

const Hats = () => (
  <div>
    <h1>Hats pase</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
