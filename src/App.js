import React from "react";
import { MovieList } from "./pages/MovieList";
import { Nav } from "./components/shared/Nav";
import { Main } from "./pages/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Sticky } from "semantic-ui-react";
import { MovieProvider } from "./components/context/MovieProvider";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Sticky>
        <Nav />
      </Sticky>

      <MovieProvider>
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/movielist" component={MovieList} />
          <Redirect to="/main" />
        </Switch>
      </MovieProvider>
    </Router>
  );
}

export default App;
