import {useState} from 'react'
import { Menu, Icon } from "semantic-ui-react";

// TODO: props: page, setPage, size, setSize
export const Paginator = ({
  moviesPerPage,
  totalMovies,
  page,
  size,
  paginate
}) => {
  const [currentPage ] = useState(page);
  const [totalMoviesPages ] = useState(size);
  const pageNumbers = [];

  const previousPage = () => {
    if (currentPage !== 1) return currentPage - 1;
  };
  const nextPage = () => {
    if (currentPage !== totalMoviesPages)
      return currentPage + 1;
  };

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Menu floated="right" pagination>
      <Menu.Item onClick={() => paginate(previousPage())} icon>
        <Icon name="chevron left" />
      </Menu.Item>
      {pageNumbers.map((number) => (
        <Menu.Item onClick={() => paginate(number)}>{number}</Menu.Item>
      ))}
      <Menu.Item onClick={() => paginate(nextPage)} icon>
        <Icon name="chevron right" />
      </Menu.Item>
    </Menu>
  );
};
