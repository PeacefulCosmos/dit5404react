import React from "react";
import { Grid } from "semantic-ui-react";
import { Detail } from "./Detail";
import { Poster } from "./Poster";

export const MovieCard = ({movie}) => {
  return (
    <Grid columns={2} centered>
      <Grid.Row>
        <Grid.Column>
          <Poster movie={movie} />
        </Grid.Column>
        <Grid.Column>
          <Detail movie={movie} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
