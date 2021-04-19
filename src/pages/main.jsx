import React from "react";
import Detail from "../components/movie/detail";
import Poster from "../components/movie/poster";
import Trailer from "../components/movie/trailer";
import Nav from "../components/shared/nav";

function Main() {
  return (
    <div>
      <Nav />
      <Detail />
      <Poster />
      <Trailer />
    </div>
  );
}

export default Main;