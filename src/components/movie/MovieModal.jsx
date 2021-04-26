import React from "react";
import { Modal, Table } from "semantic-ui-react";
import { Trailer } from "./Trailer";
import { MovieCard } from "./MovieCard";
import "./css/movie-modal.css";

export const MovieModal = ({ movie, onClose }) => {
  return (
    <Modal id="movie-modal" open onClose={onClose}>
      <Modal.Header>Movie Detail</Modal.Header>
      <Modal.Content image scrolling>
        <Table>
          <Table.Row>
            <Trailer movie={movie} />
          </Table.Row>
          <Table.Row>
            <MovieCard movie={movie} />
          </Table.Row>
        </Table>
      </Modal.Content>
    </Modal>
  );
};
