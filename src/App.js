import React from "react"
import Home from "./components/Home.jsx"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Pdf from "./components/Pdf.jsx"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/portfolio" component={Home} />
        <Route exact path="/portfolio/pdf" component={Pdf} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
