import { FeatureMovieCard } from "./FeatureMovieCard";
import { Container, Grid } from "semantic-ui-react";
import "./css/featureMovieCollection.css";

export const FeatureMovieCollection = ({ movies, size, column }) => {
  return (
    <Grid centered className="featureMovieCollection">
      <Grid.Row centered columns={column}>
        {movies.map((movie) => (
          <Grid.Column>
            <FeatureMovieCard movie={movie} size={size} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};
