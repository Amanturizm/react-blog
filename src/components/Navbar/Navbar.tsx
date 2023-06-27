import React from 'react';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black bg-opacity-50 position-fixed w-100 z-3">
      <div className="d-flex mx-5 w-100">
        <Link className="navbar-brand text-white" to="/">My Blog</Link>
        <div className="collapse navbar-collapse d-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/new-post">Add</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;