import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { Container, Menu } from "semantic-ui-react";
import "../../../src/App.css";

export const Nav = () => {
  return (
    <Menu inverted>
      <Container>
        <Menu.Item>
          <Link to="./main" style={{ textDecoration: "none" }}>
            <Icon name="braille" size="huge" />
          </Link>
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
