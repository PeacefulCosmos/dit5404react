import React from "react";
import "../../../src/App.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

export const Nav = () => {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <Icon name="braille" size="huge" />
      <ul className="nav-links">
        <Link style={navStyle} to="/main">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/movielist">
          <li>Movie List</li>
        </Link>
      </ul>
    </nav>
  );
};
