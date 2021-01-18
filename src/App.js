import React from "react"
import Home from "./components/Home"
import {BrowserRouter, Switch, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/portfolio" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
