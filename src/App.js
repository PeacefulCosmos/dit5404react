import useAxios from "axios-hooks";
import "./App.css";
import { environment } from "./environment/environment.js";
import { MovieList } from "./pages/MovieList";
import { Nav } from "./components/shared/Nav";
import { Main } from "./pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Sticky } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";

function App() {
  const [{ data, loading, error }] = useAxios(
    `${environment.baseUrl.api}/movie`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Router>
      <Sticky>
        <Nav />
      </Sticky>

      <div>
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
