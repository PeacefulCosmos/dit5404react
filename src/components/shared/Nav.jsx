import React from "react";
import "../../../src/App.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { Container, Menu, Sticky } from "semantic-ui-react";

export const Nav = () => {
  // const navStyle = {
  //   color: 'white'
  // };

  return (
    // <nav>
    //   <Icon name='braille' size='huge'/>
    //   <ul className="nav-links">
    //     <Link style={navStyle} to="./Main">
    //     <li>Home</li>
    //     </Link>
    //     <Link style={navStyle} to="./movie-list">
    //     <li >Movie List</li>
    //     </Link>
    //   </ul>
    //   </nav>

    <Menu inverted>
      <Container>
        <Menu.Item>
          <Icon name="braille" size="huge" />
        </Menu.Item>

        <Menu inverted>
          <Menu.Item>
            <Link to="./main">Main</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="./movielist">Movie List</Link>
          </Menu.Item>
        </Menu>
      </Container>
    </Menu>
  );
};
