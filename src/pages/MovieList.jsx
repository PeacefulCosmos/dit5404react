import { useState } from "react";
import { Container, Table, Divider } from "semantic-ui-react";
import { MovieGrid } from "../components/movie/MovieGrid";
import { Paginator } from "../components/shared/Paginator";
import { usePaginator } from "../util/usePaginator";
import { useMovieState } from "../components/context/MovieProvider";
import { MovieModal } from "../components/movie/MovieModal";
import "./css/movieList.css";

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
          <MovieGrid movie={movie} columns={2} />
        </div>
        {/* <span>11111111111111111111</span> */}
      </Table.Cell>
    </Table.Row>
  );

  return (
    <Container>
      <Divider horizontal>
        <span className="featureDivider">Lastest Movie</span>
      </Divider>
      <Container className="movieListTable">
        <Table celled inverted selectable>
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
      </Container>
    </Container>
  );
};
