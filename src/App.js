import React from "react";
import "./App.css";

import logo from "./images/white.jpg";
import linkedin from "./images/linkedin-icon.png";
import github from "./images/github-icon.png";

import { HashRouter, Route, NavLink, Switch } from "react-router-dom";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from "./Components/Home";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <div className="navigation">
          <NavLink activeClassName="active" to="/" className="logo-image" exact>
            <img src={logo} alt="logo image" />
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
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <div className="footer">
          <a
            href="https://www.linkedin.com/in/izien-iremiren/"
            className="footer-link"
          >
            <img src={linkedin} alt="linkedin logo" />
          </a>
          <a href="https://github.com/ICUBE321" className="footer-link">
            <img src={github} alt="github logo" />
          </a>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
