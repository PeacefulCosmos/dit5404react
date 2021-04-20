import React from "react";
import { Grid, Card } from "semantic-ui-react";
import Detail from "./detail";
import Poster from "./poster";

// TODO: destruct the props, only movie is used props.movie -> { movie }
export const MovieCard = (props) => {
  return (
    <Grid columns={2} centered>
      <Grid.Row>
        <Grid.Column>
          <Poster movie={props.movie} />
        </Grid.Column>
        <Grid.Column>
          <Detail movie={props.movie} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
