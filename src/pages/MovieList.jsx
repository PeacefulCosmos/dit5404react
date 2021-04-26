import { useState } from "react";
import { Table } from "semantic-ui-react";
import { MovieCard } from "../components/movie/MovieCard";
import { Paginator } from "../components/shared/Paginator";
import { usePaginator } from "../util/usePaginator";
import { useMovieState } from "../components/context/MovieProvider";
import { MovieModal } from "../components/movie/MovieModal";

export const MovieList = () => {
  const { movies } = useMovieState();
  const [pageIndex, setPageIndex] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const pageSize = 5;

  const { currentMovies, totalMoviesPages } = usePaginator(
    movies,
    pageIndex,
    pageSize
  );

  const renderCards = (movie) => (
    <Table.Row key={movie.movie_id}>
      <Table.Cell>
        <div onClick={() => setSelectedMovie(movie)}>
          <MovieCard movie={movie} columns={4} />
        </div>
      </Table.Cell>
    </Table.Row>
  );

  return (
    <Table celled inverted selectable style={{ cursor: "pointer" }}>
      <Table.Body>{currentMovies.map(renderCards)}</Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="5">
            <Paginator
              pageIndex={pageIndex}
              totalPage={totalMoviesPages}
              setPageIndex={setPageIndex}
            />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </Table>
  );
};
