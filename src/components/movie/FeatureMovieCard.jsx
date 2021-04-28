import { Card, Container } from "semantic-ui-react";
import { Poster } from "./Poster";
import "./css/featureMovieCard.css";

export const FeatureMovieCard = ({ movie, size }) => {
  const actors = movie.actor;
  const title = movie.title;
  const duration = movie.duration_of_movie;
  const director = movie.director;

  const getLeadingActor = () => {
    if (actors.length > 3) return actors.slice(0, 2).toString();
    else return actors.toString();
  };

  return (
    <Card centered className="featureMovieCard">
      <Poster movie={movie} size={size} />
      <Card.Content>
        <Card.Header className="featureMovieCardHeader">{title}</Card.Header>
        <Card.Meta>
          <span>{duration} minutes</span>
        </Card.Meta>
        <Card.Description>
          <div>Director: {director}</div>
          <div>Starring: {getLeadingActor()}</div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>5 star</a>
      </Card.Content>
    </Card>
  );
};
