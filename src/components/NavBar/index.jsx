import React from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../constant/route";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="nav-container">
      <Link to={HOME} className="nav-container_a">
        Home
      </Link>
    </nav>
  );
}

export default NavBar;
