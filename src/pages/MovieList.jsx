import { useEffect, useState } from "react";
import { Table, Modal, Button, Grid } from "semantic-ui-react";
import { MovieCard } from "../components/movie/MovieCard";
import { Paginator } from "../components/shared/Paginator";
import { usePaginator } from "../util/usePaginator";
import { Trailer } from "../components/movie/Trailer";

export const MovieList = (props) => {
  // console.log(this.props);
  console.log(props);
  const [movies, setMovies] = useState(props.movies);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);

  useEffect(() => {
    setMovies(props.movies);
  }, [props.movies]);

  const { currentMovies, totalMoviesPages } = usePaginator(
    movies,
    currentPage,
    moviesPerPage
  );

  const getCurrentPage = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };

  return (
    <Table celled inverted selectable>
      <Table.Body>
        {currentMovies.map((movie) => (
          <Table.Row key={movie.movie_id}>
            <Table.Cell>
              <Modal
                trigger={
                  <a inverted>
                    <MovieCard movie={movie} />
                  </a>
                }
              >
                <Modal.Header>Movie Detail</Modal.Header>
                <Modal.Content image scrolling>
                  <Table>
                    <Table.Row>
                      <MovieCard movie={movie} />
                    </Table.Row>
                    <Table.Row>
                      <Trailer movie={movie} />
                    </Table.Row>
                  </Table>
                </Modal.Content>
              </Modal>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="5">
            <Paginator
              moviesPerPage={moviesPerPage}
              totalMovies={movies.length}
              page={currentPage}
              size={totalMoviesPages}
              paginate={getCurrentPage}
            />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};
