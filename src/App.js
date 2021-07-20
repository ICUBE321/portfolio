import React from 'react';
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
          <img src="./Images/white.jpg" className="logo-image" />
          <div className="navigation-sub">
            <NavLink activeClassName="active" to="portfolio/" className="item" exact>
              HOME
            </NavLink>
            <NavLink activeClassName="active" to="portfolio/about" className="item">
              ABOUT
            </NavLink>
            <NavLink activeClassName="active" to="portfolio/projects" className="item">
              PROJECTS
            </NavLink>
            <NavLink activeClassName="active" to="portfolio/contact" className="item">
              CONTACT
            </NavLink>
          </div>
        </div>
        <Route exact path="portfolio/" component={Home} />
        <Route path="portfolio/about" component={About} />
        <Route path="portfolio/projects" component={Projects} />
        <Route path="portfolio/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
