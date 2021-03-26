
import {  Redirect, Router } from "@reach/router"

import Home from "../home"

import './styles.scss'


const App = () => {


  return (
    <div className="app">
      <Router>
        <Home path="/" />
        <Redirect from="/*" to="/" />
      </Router>
    </div>
  );
}

export default App
