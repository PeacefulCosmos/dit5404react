
import {Detail} from "../components/movie/Detail";
import {Poster} from "../components/movie/Poster";
import {Trailer} from "../components/movie/Trailer";
import {Nav} from "../components/shared/Nav";

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
