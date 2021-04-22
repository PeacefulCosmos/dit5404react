import { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { MovieCard } from "../components/movie/MovieCard";
import { Paginator } from "../components/shared/Paginator";
import { usePaginator } from '../util/usePaginator'

export const MovieList = (props) => {
  // TODO: please add default value for movies, you forgot to handle if the response is undefined
  const [movies, setMovies] = useState(props.movies ?? []);
  const [page, setPage] = useState(1);
  // TODO: if this cannot be changed, why useState ?
  const [size] = useState(5);

  // TODO: no need to use useEffect, since page & size change will automatically re-render
  // TODO: besides, movie fetching should be done in this component, not in App.js
  // TODO: One more tip, useEffect should place after all other hooks;
  useEffect(() => {
    if(props.movies) {
      setMovies(props.movies);
    }
  }, [props.movies]);

  const {currentMovies, totalMoviesPages} = usePaginator(movies, page, size)

  // TODO: why don't you pass the setCurrentPage directly as props ?
  // const getCurrentPage = (pageNumber) => {
  //   return setCurrentPage(pageNumber);
  // }

  return (
    <Table celled inverted selectable>
      <Table.Body>
        {currentMovies.map((movie) => (
          <Table.Row>
            <Table.Cell>
              <MovieCard movie={movie} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="5">
            <Paginator
              size={size}
              page={page}
              setPage={setPage}
              totalPage={totalMoviesPages}
            />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};
