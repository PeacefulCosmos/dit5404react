import React, { useEffect, useState } from "react";
import { Table, Menu, Icon } from "semantic-ui-react";
import Paginator from "../components/shared/paginator";

function MovieList(props) {
  const [movies, setMovies] = useState(props.movies);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(10);

  useEffect(() => {
    setMovies(props.movies);
  }, [props.movies]);

  //current movie list
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  //change page
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    return setCurrentPage(pageNumber);
  };

  function getLeadingActor(actors) {
    let result = "";
    if (actors.length > 3) return actors.slice(0, 2).toString();
    else return actors.toString();
  }

  return (
    <Table celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Leading Actor</Table.HeaderCell>
          <Table.HeaderCell>Duration(mins)</Table.HeaderCell>
          <Table.HeaderCell>Rating</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {currentMovies.map((movie) => (
          <Table.Row>
            <Table.Cell>{movie.title}</Table.Cell>
            <Table.Cell>{movie.category.toString()}</Table.Cell>
            <Table.Cell>{getLeadingActor(movie.actor)}</Table.Cell>
            <Table.Cell>{movie.duration_of_movie}</Table.Cell>
            <Table.Cell>{movie.rating}</Table.Cell>
          </Table.Row>
        ))}
        <Table.Row>
          <Table.Cell></Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <Paginator
              moviesPerPage={moviesPerPage}
              totalMovies={movies.length}
              paginate={paginate}
            />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}

export default MovieList;
