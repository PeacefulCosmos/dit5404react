import React from "react";
import { Container, Grid, Item, List, Image } from "semantic-ui-react";
import Rating from "@material-ui/lab/Rating";
import { Detail } from "./Detail";
import { Poster } from "./Poster";

export const MovieGrid = ({ movie, columns = 1 }) => {
  return (
    <Grid columns={columns} centered>
      <Grid.Row>
        {columns !== 2 && <Grid.Column />}
        <Grid.Column textAlign="center" width={4}>
          <Poster movie={movie} size={`medium`} />
        </Grid.Column>
        <Grid.Column textAlign="left" width={6}>
          <Detail movie={movie} />
        </Grid.Column>
        {columns !== 2 && <Grid.Column />}
      </Grid.Row>
    </Grid>
  );
};

{
  /* <Item.Group>
<Item>
  <Item.Image src={movie.poster} size="medium" />
  <Item.Content>
    <Item.Header>{movie.title}</Item.Header>
    <Item.Meta>{movie.duration_of_movie}</Item.Meta>
    <Item.Description></Item.Description>
    <Item.Extra></Item.Extra>
  </Item.Content>
</Item>
</Item.Group> */
}
