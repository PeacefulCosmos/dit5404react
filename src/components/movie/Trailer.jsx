import React, { useState } from "react";
import { Embed } from "semantic-ui-react";
import "./css/trailer.css";

export const Trailer = ({ movie }) => {
  const [movieState] = useState(movie);

  return (
    <Embed
      aspectRatio="16:9"
      autoplay={false}
      brandedUI
      color="white"
      hd={false}
      id={movieState.trailer}
      placeholder={movieState.backdrop}
      source="youtube"
    />
  );

  // return (
  //   <div
  //     className="ui embed"
  //     data-source="youtube"
  //     data-id={movie.trailer}
  //     data-placeholder={movie.backdrop}
  //   ></div>
  // );
};
