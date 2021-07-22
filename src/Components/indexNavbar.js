import React from "react"
import {NavLink, useLocation } from "react-router-dom";

function indexNavbar(){
  const location = useLocation();
  return(
<div className="navigation">
          <NavLink activeClassName="active" to="/" className="logo-image">
            <img src={logo} alt="logo image" />
          </NavLink>
          <div className="navigation-sub">
            <NavLink activeClassName="active" to="/" className="item">
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
  )
}