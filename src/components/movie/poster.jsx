import React from "react";
import { Image } from "semantic-ui-react";

// TODO: remove this component, due to no complex UI logic, only image display
function Poster(props) {
  return <Image src={props.movie.poster} size="large" />;
}

export default Poster;
