import React from 'react';
import { Menu, Icon } from "semantic-ui-react";

// TODO: props: page, setPage, size, setSize
export const Paginator = ({
  size,
  page,
  setPage,
  totalPage,
}) => {

  const pageNumbers = [...new Array(totalPage)];

  const previousPage = () => {
    if (page !== 1) {
      return setPage(page => page - 1)
    };
  };
  const nextPage = () => {
    if (page !== totalPage){
      return setPage(page => page + 1);
    }
  };

  // There is faster way
  // for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  return (
    <Menu floated="right" pagination>
      <Menu.Item onClick={previousPage} icon>
        <Icon name="chevron left" />
      </Menu.Item>
      {pageNumbers.map((_, index) => (
        <Menu.Item onClick={() => setPage(index + 1)}>{index + 1}</Menu.Item>
      ))}
      <Menu.Item onClick={nextPage} icon>
        <Icon name="chevron right" />
      </Menu.Item>
    </Menu>
  );
};
