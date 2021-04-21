
import { Menu, Icon } from "semantic-ui-react";

// TODO: props: page, setPage, size, setSize
export const Paginator = ({
  moviesPerPage,
  totalMovies,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Menu floated="right" pagination>
      {/** TODO: use onClick={previousPage}, no argument is passed to the function */}
      <Menu.Item onClick={() => previousPage()} icon>
        <Icon name="chevron left" />
      </Menu.Item>
      {pageNumbers.map((number) => (
        <Menu.Item onClick={() => paginate(number)}>{number}</Menu.Item>
      ))}
      <Menu.Item onClick={() => nextPage()} icon>
        <Icon name="chevron right" />
      </Menu.Item>
    </Menu>
  );
};
