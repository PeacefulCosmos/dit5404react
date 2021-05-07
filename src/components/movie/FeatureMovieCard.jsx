import { Card, Container } from "semantic-ui-react";
import { Poster } from "./Poster";
import "./css/featureMovieCard.css";
import Rating from "@material-ui/lab/Rating";

export const FeatureMovieCard = ({ movie, size }) => {
  const actors = movie.actor;
  const title = movie.title;
  const duration = movie.duration_of_movie;
  const director = movie.director;
  const rating = movie.vote_average;

  const getLeadingActor = () => {
    if (actors.length > 3) return actors.slice(0, 2).toString();
    else return actors.toString();
  };

  return (
    <Container className="featureMovieCardContainer">
      <Card centered className="featureMovieCard">
        <Poster movie={movie} size={size} />

        <Card.Content>
          <Card.Header className="featureMovieCardHeader">{title}</Card.Header>
          <Card.Meta>{duration} minutes</Card.Meta>
          <Card.Description>
            <div></div>
            <div>Director: {director}</div>
            <div>Starring: {getLeadingActor()}</div>
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <Rating
            disabled
            name="customized-10"
            defaultValue={rating}
            max={10}
            readOnly={true}
          />
          <div>rating: {rating}</div>
        </Card.Content>
      </Card>
    </Container>
  );
};
