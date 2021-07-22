import React from "react";
import "./App.css";

import logo from "./images/white.jpg";
import linkedin from "./images/linkedin-icon.png";
import github from "./images/github-icon.png";

import { HashRouter, Route, NavLink, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <NavLink exact activeClassName="active" to="/portfolio" className="logo-image">
            <img src={logo} alt="logo image" />
          </NavLink>
          <div className="navigation-sub">
            <NavLink exact activeClassName="active" to="/portfolio" className="item">
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
            <Route exact path="/portfolio" component={Home} />
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
    </BrowserRouter>
  );
}

export default App;
