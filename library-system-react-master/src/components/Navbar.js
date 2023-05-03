import React from 'react';
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Student Login</Link>
        </li>
        <li className="nav-item">
          <Link to = "/teacher" className="nav-link">Teacher Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
