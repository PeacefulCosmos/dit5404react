import React from "react";
import { List } from "semantic-ui-react";

// TODO: Destruct Props, too annoying -> props.xx props.xx props.xx, and clean code
function Detail(props) {
  console.log(props);

  const getLeadingActor = () => {
    // console.log(props.movie.actor.length);
    if (props.movie.actor.length > 3)
      return props.movie.actor.slice(0, 2).toString();
    else return props.movie.actor.toString();
  };

  const dateParser = (year_of_release) => {
    let date = new Date(year_of_release);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  return (
    <List>
      <List.Item>
        <h1>{props.movie.title}</h1>
      </List.Item>
      <List.Item>
        <h2>Duration: {props.movie.duration_of_movie} mins</h2>
      </List.Item>
      <List.Item>
        <h2>Director: {props.movie.director}</h2>
      </List.Item>
      <List.Item>
        <h2>Leading Actor/Actress: {getLeadingActor()}</h2>
      </List.Item>
      <List.Item>
        <h2>Year of release: {dateParser(props.movie.year_of_release)}</h2>
      </List.Item>
      <List.Item>
        <h2>Rating: {props.movie.rating}</h2>
      </List.Item>
    </List>
  );
}

export default Detail;
