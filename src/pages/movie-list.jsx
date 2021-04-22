import React, { useEffect, useState } from "react";
import { Table, Menu, Icon, Image } from "semantic-ui-react";
import { MovieCard } from "../components/movie/movieCard";
// TODO: Named import -- best practice
import Paginator from "../components/shared/paginator";

function MovieList(props) {
  const [movies, setMovies] = useState(props.movies);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(5);

  useEffect(() => {
    setMovies(props.movies);
  }, [props.movies]);

  //current movie list

  // TODO: for much more clean code, create a custom hook for this, usePagination(movies, page, size);
  // TODO: Pagination should be done by the backend
  // but can be ignored this time...
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalMoviesPages = Math.ceil(movies.length / moviesPerPage);

  // TODO: since pagination handler are not part of movie-list.js
  // should put the logic inside paginatior.jsx
  //change page
  const paginate = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };

  //change page
  const previousPage = () => {
    if (currentPage !== 1) return setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage !== totalMoviesPages)
      return setCurrentPage(currentPage + 1);
  };

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
              moviesPerPage={moviesPerPage}
              totalMovies={movies.length}
              paginate={paginate}
              previousPage={previousPage}
              nextPage={nextPage}
            />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
    
  );
}


export default MovieList;
