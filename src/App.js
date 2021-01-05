import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Portfolio from "./components/Portfolio.jsx"

function App() {
  return (
    <Router>
      <Route
      exact path="/"
      component={Portfolio}
       />
    </Router>
  );
}

export default App;
