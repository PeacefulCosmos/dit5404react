import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Container } from "semantic-ui-react";
import { Trailer } from "./Trailer";
export const TrailerSlide = ({ movies }) => {
  console.log(movies[0].movie_id);
  return (
    <Container>
      <CarouselProvider
        className="carousel-size"
        visibleSlides={1}
        naturalSlideWidth={100}
        naturalSlideHeight={250}
        totalSlides={movies.length}
      >
        <ButtonBack>Back</ButtonBack>
        <Slider>
          {movies.map((movie) => (
            <Slide index={movie.movie_id}>
              <Trailer movie={movie} />
            </Slide>
          ))}
        </Slider>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </Container>
  );
};
