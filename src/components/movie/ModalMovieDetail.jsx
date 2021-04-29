import { List, Item } from "semantic-ui-react";
import Rating from "@material-ui/lab/Rating";

export const MovdalMovieDetail = ({ movie }) => {
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
    <List>
      <List.Item>
        <h1>{title}</h1>
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
        <span style={{ fontSize: "20px" }}>Rating: {rating} </span>
        <Rating
          size="large"
          name="customized-10"
          defaultValue={rating}
          max={10}
        />
      </List.Item>
    </List>
  );
};
