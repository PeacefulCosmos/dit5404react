import React from "react";
import '../../../src/App.css';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'


function Nav() {

  const navStyle = {
    color: 'white'
  };
  return (
  <nav>
    <Icon name='braille' size='huge'/>
    <ul className="nav-links">
      <Link style={navStyle} to="./Main">
      <li>Home</li>
      </Link>
      <Link style={navStyle} to="./movie-list">
      <li >Movie List</li>
      </Link>
    </ul>
    </nav>
  );
}


export default Nav;
