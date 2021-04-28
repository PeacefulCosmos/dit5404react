import React from "react";
import { Grid } from "semantic-ui-react";
import { Detail } from "./Detail";
import { Poster } from "./Poster";

export const MovieGrid = ({ movie, columns = 2 }) => {
  return (
    <Grid columns={columns} centered>
      <Grid.Row>
        {columns !== 2 && <Grid.Column />}
        <Grid.Column>
          <Poster movie={movie} size={`medium`} />
        </Grid.Column>
        <Grid.Column>
          <Detail movie={movie} />
        </Grid.Column>
        {columns !== 2 && <Grid.Column />}
      </Grid.Row>
    </Grid>
  );
};
