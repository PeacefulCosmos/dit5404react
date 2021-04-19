import React, { useEffect } from "react";
import { Menu, Icon } from "semantic-ui-react";

const Paginator = ({ moviesPerPage, totalMovies, paginate }) => {
  const pageNumbers = [];

  //   useEffect(() => {})

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(paginate);

  return (
    <Menu floated="right" pagination>
      <Menu.Item as="a" icon>
        <Icon name="chevron left" />
      </Menu.Item>
      {pageNumbers.map((number) => (
        <Menu.Item href="!#" onClick={paginate(number)}>
          {number}
        </Menu.Item>
      ))}
      <Menu.Item as="a" icon>
        <Icon name="chevron right" />
      </Menu.Item>
    </Menu>
  );
};

export default Paginator;
