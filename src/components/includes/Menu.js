import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand" >
            Navbar
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/' className="nav-link" >
                    Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/about' className="nav-link" >
                    About
                </NavLink>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
