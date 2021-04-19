import React from "react";
import { Image } from "semantic-ui-react";

function Poster(props) {
  return <Image src={props.movie.poster} size="large" />;
}

export default Poster;
