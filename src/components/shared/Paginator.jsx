import { useState, useEffect } from "react";
import { Menu, Icon } from "semantic-ui-react";

// TODO: props: page, setPage, size, setSize
export const Paginator = ({
  moviesPerPage,
  totalMovies,
  page,
  size,
  paginate,
}) => {
  const [currentPage, setCurrentPage] = useState(page);
  const [totalMoviesPages] = useState(size);
  const pageNumbers = [];

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const previousPage = (currentPage) => {
    if (currentPage > 1) {
      return currentPage - 1;
    }
    return currentPage;
  };
  const nextPage = (currentPage) => {
    if (currentPage < totalMoviesPages) {
      return currentPage + 1;
    }
    return currentPage;
  };

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Menu floated="right" pagination>
      <Menu.Item onClick={() => paginate(previousPage(currentPage))} icon>
        <Icon name="chevron left" />
      </Menu.Item>
      {pageNumbers.map((number) => (
        <Menu.Item key={number} onClick={() => paginate(number)}>
          {number}
        </Menu.Item>
      ))}
      <Menu.Item onClick={() => paginate(nextPage(currentPage))} icon>
        <Icon name="chevron right" />
      </Menu.Item>
    </Menu>
  );
};
