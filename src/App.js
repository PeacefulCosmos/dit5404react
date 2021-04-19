import logo from "./logo.svg";
import "./App.css";
import useAxios from "axios-hooks";
import { environment } from "./environment/environment.js";
import { Container, Header, List } from "semantic-ui-react";
import { Counter } from "./components/counter";
import Main from "./pages/main";
import MovieList from "./pages/movie-list";
import { useState } from "react";

function App() {
  const [{ data, loading, error }, refetch] = useAxios(
    `${environment.baseUrl.api}/movie`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return <MovieList movies={data} />;
}

export default App;
