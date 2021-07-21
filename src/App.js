import React from "react";
import "./App.css";

import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <NavLink activeClassName="active" to="/" className="logo-image" exact>
            <img src={"/Images/white.jpg"} />
          </NavLink>
          <div className="navigation-sub">
            <NavLink activeClassName="active" to="/" className="item" exact>
              HOME
            </NavLink>
            <NavLink activeClassName="active" to="/about" className="item">
              ABOUT
            </NavLink>
            <NavLink activeClassName="active" to="/projects" className="item">
              PROJECTS
            </NavLink>
            <NavLink activeClassName="active" to="/contact" className="item">
              CONTACT
            </NavLink>
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
