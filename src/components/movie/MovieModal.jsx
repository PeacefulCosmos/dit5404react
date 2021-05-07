import React, { useState } from "react";
import { Container, Modal, Grid, List, Item, Divider } from "semantic-ui-react";
import Rating from "@material-ui/lab/Rating";
import { Trailer } from "./Trailer";
import { MovieGrid } from "./MovieGrid";
import "./css/movie-modal.css";
import { Poster } from "./Poster";
import { Detail } from "./Detail";
import { fiveStarRatingService } from "../../service/five-start-rating";

export const MovieModal = ({ movie, onClose }) => {
  const [id] = useState(movie.movie_id);
  const [marked, setMarked] = useState(false);
  const [rating, setRating] = useState(movie.vote_average);
  // const [rating, ]
  const actors = movie.actor;
  const title = movie.title;
  const duration = movie.duration_of_movie;
  const director = movie.director;
  const releaseDate = movie.year_of_release;
  const description = movie.overview;
  const category = movie.category;

  const getCategory = () => {
    return category.toString();
  };

  const getLeadingActor = () => {
    if (actors.length > 3) return actors.slice(0, 2).toString();
    else return actors.toString();
  };

  const dateParser = (year_of_release) => {
    let date = new Date(year_of_release);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  const setFiveStarRating = (e) => {
    const newRating = ((rating + parseInt(e.target.value, 10)) / 2).toFixed(1);
    fiveStarRatingService.setRating(id, newRating);
    // setRating(newRating);
    setMarked(true);
  };

  return (
    <Modal open onClose={onClose}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content image scrolling>
        <Container>
          <Modal.Description>
            <Container>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <Poster movie={movie} size="large"></Poster>
                  </Grid.Column>
                  <Grid.Column>
                    <List>
                      <List.Item>
                        <div className="modal-list-item">
                          <h1>{movie.title}</h1>
                        </div>
                      </List.Item>
                      <List.Item>
                        <div className="modal-list-item">
                          <h2>Duration: </h2> <h4>{duration} mins</h4>
                        </div>
                      </List.Item>
                      <List.Item>
                        <div className="modal-list-item">
                          <h2>Category: </h2> <h4>{getCategory()}</h4>
                        </div>
                      </List.Item>
                      <List.Item>
                        <div className="modal-list-item">
                          <h2>Director: </h2> <h4>{director}</h4>
                        </div>
                      </List.Item>
                      <List.Item>
                        <div className="modal-list-item">
                          <h2>Starring: </h2>
                          <h4>{getLeadingActor()}</h4>
                        </div>
                      </List.Item>
                      <List.Item>
                        <div className="modal-list-item">
                          <h2>Year of release: </h2>
                          <h4>{dateParser(releaseDate)}</h4>
                        </div>
                      </List.Item>
                      <List.Item>
                        <h2>Current Rating:</h2>
                        <h4>{rating}</h4>
                      </List.Item>
                      <List.Item>
                        <h2>Your Rating: </h2>
                      </List.Item>
                      <Rating
                        size="large"
                        readOnly={marked}
                        name="customized-10"
                        defaultValue={null}
                        max={10}
                        onChange={setFiveStarRating}
                      />
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid columns={1}>
                <Grid.Row>
                  <Grid.Column>
                    <h1 style={{ "margin-top": "10px" }}>Overview</h1>
                    <Divider></Divider>
                    <h4>{description}</h4>
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
    </Modal>
  );
};
