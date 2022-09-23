import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1>Blog Post</h1>
      </Link>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/addpost">Add post</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
