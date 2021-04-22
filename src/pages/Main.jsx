import { Detail } from "../components/movie/Detail";
import { Poster } from "../components/movie/Poster";
import { Trailer } from "../components/movie/Trailer";
import { TrailerSlide } from "../components/movie/TrailerSlide";
import { Container } from "semantic-ui-react";
import { Nav } from "../components/shared/Nav";

export const Main = ({ movies }) => {
  return (
    <Container>
      <TrailerSlide movies={movies} />
    </Container>
  );
};
