import useAxios from "axios-hooks";
import { environment } from "./environment/environment.js";
import { MovieList } from "./pages/MovieList";
import { Nav } from "./components/shared/Nav";
import { Main } from "./pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";

function App() {
  const [{ data, loading, error }] = useAxios(
    `${environment.baseUrl.api}/movie`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/main">
            <Main movies={data} />
          </Route>
          <Route path="/movielist">
            <MovieList movies={data} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
