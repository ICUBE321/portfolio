import React from "react";
import "./App.css";

import logo from "./images/white.jpg";
import linkedin from "./images/linkedin-icon.png";
import github from "./images/github-icon.png";

import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import Projects from "./Components/Projects";
import IndexNavbar from "./Components/IndexNavbar";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from "./Components/Home";


function App() {
  return (
    <div className="App">
      <Router>
      
        <div>
        <IndexNavbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
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
      </Router>
    </div>
  );
}

export default App;
