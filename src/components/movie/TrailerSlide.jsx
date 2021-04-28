import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Trailer } from "./Trailer";
import { useMovieState } from "../context/MovieProvider";
import "./css/trailerSlide.css";
import { Container } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export const TrailerSlide = ({ movies }) => {
  // const { movies } = useMovieState();
  console.log(movies);
  return (
    <Container>
      <CarouselProvider
        className="carousel-size slider"
        visibleSlides={1}
        naturalSlideWidth={500}
        naturalSlideHeight={250}
        totalSlides={movies.length}
      >
        <ButtonBack className="buttonBack round">
          <FontAwesomeIcon icon={faAngleLeft} />
        </ButtonBack>
        <Slider>
          {movies.map((movie) => (
            <Slide index={movie.movie_id}>
              <Trailer movie={movie} />
            </Slide>
          ))}
        </Slider>
        <ButtonNext className="buttonNext round">
          <FontAwesomeIcon icon={faAngleRight} />
        </ButtonNext>
      </CarouselProvider>
    </Container>
  );
};
