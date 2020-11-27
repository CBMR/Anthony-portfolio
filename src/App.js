import React from "react";
import { Switch, Route } from "react-router-dom";

import { Nav, Footer } from "./body/layout";
import Portfolio from "./body/portfolio";
import About from "./body/about";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
