import React from "react";
import { Container, Modal, Grid, List, Item } from "semantic-ui-react";
import Rating from "@material-ui/lab/Rating";
import { Trailer } from "./Trailer";
import { MovieGrid } from "./MovieGrid";
import "./css/movie-modal.css";
import { Poster } from "./Poster";
import { Detail } from "./Detail";

export const MovieModal = ({ movie, onClose }) => {
  const actors = movie.actor;
  const title = movie.title;
  const duration = movie.duration_of_movie;
  const director = movie.director;
  const releaseDate = movie.year_of_release;
  const rating = movie.vote_average;

  const getLeadingActor = () => {
    if (actors.length > 3) return actors.slice(0, 2).toString();
    else return actors.toString();
  };

  const dateParser = (year_of_release) => {
    let date = new Date(year_of_release);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  return (
    <Modal open onClose={onClose}>
      <Modal.Header>{movie.title}</Modal.Header>
      <Modal.Content image>
        <Container fluid>
          <Modal.Description>
            <Container fluid>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <Poster movie={movie} size="large"></Poster>
                  </Grid.Column>
                  <Grid.Column>
                    <List>
                      <List.Item>
                        <h1>{movie.title}</h1>
                      </List.Item>
                      <List.Item>
                        <h2>Duration: </h2> <h3>{duration} mins</h3>
                      </List.Item>
                      <List.Item>
                        <h2>Director: {director}</h2>
                      </List.Item>
                      <List.Item>
                        <h2>Leading Actor/Actress: {getLeadingActor()}</h2>
                      </List.Item>
                      <List.Item>
                        <h2>Year of release: {dateParser(releaseDate)}</h2>
                      </List.Item>
                      <List.Item>
                        <span style={{ fontSize: "20px" }}>
                          Rating: {rating}
                        </span>
                      </List.Item>
                      <Rating
                        size="large"
                        name="customized-10"
                        defaultValue={rating}
                        max={10}
                      />
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid columns={1}>
                <Grid.Row>
                  <Grid.Column>
                    <Trailer movie={movie} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Modal.Description>
        </Container>
      </Modal.Content>
      {/* <Modal.Content image scrolling>
        <Trailer movie={movie} />
        <MovieGrid movie={movie} />
      </Modal.Content> */}
    </Modal>
  );
};

// id="movie-modal"
