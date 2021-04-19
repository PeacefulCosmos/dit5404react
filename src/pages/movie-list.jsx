import React, { useEffect, useState } from "react";
import { Table, Menu, Icon } from "semantic-ui-react";

function MovieList(props) {
  const [movies, setMovies] = useState(props.movies);

  useEffect(() => {
    setMovies(props.movies);
  }, [props.movies]);
  console.log(props);
  console.log(movies);

  function getLeadingActor(actors) {
    let result = "";
    if (actors.length > 3) return actors.slice(0, 2).toString();
    else return actors.toString();
  }

  return (
    <Table celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Leading Actor</Table.HeaderCell>
          <Table.HeaderCell>Duration(mins)</Table.HeaderCell>
          <Table.HeaderCell>Rating</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {movies.map((movie) => (
          <Table.Row>
            <Table.Cell>{movie.title}</Table.Cell>
            <Table.Cell>{movie.category.toString()}</Table.Cell>
            <Table.Cell>{getLeadingActor(movie.actor)}</Table.Cell>
            <Table.Cell>{movie.duration_of_movie}</Table.Cell>
            <Table.Cell>{movie.rating}</Table.Cell>
          </Table.Row>
        ))}
        <Table.Row>
          <Table.Cell></Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}

export default MovieList;
