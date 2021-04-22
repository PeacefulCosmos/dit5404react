import logo from "./logo.svg";
import "./App.css";
import useAxios from "axios-hooks";
import { environment } from "./environment/environment.js";
import { Container, Header, List } from "semantic-ui-react";
import { Counter } from "./components/counter";
import Main from "./pages/main";
// TODO: Try to use named export, best-practice
import MovieList from "./pages/movie-list";
import Poster from "./components/movie/poster";
import Nav from "./components/shared/nav";
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';



import { useState } from "react";

// TODO: Search `TODO` in your IDE to see reviewed code
// TODO: Please remove unused files, App.css, App.test.js, logo.svg etc
// TODO: yarn.lock and package-lock.json should remove one
// TODO: reportWebVitals is useless in this project, please remove also, and update index.js

// TODO: Component and Page file name should be in PascalCase -> MovieDetail.jsx -- best practice

function App() {
  // TODO: put this hook in /pages/movie-list
  // TODO: refetch seems useless here, please remove
  const [{ data, loading, error }, refetch] = useAxios(
    `${environment.baseUrl.api}/movie`
  );

  // TODO: add curly braces after if, best-practice if(something) {}
  // Nice error handling, but change Error! to something meaningful
  if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error!</p>;

  // return <MovieList movies={data} />;
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path="./pages/main" component={Main}/>
          <Route path="./pages/movie-list" component={MovieList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
