import useAxios from "axios-hooks";
import { environment } from "./environment/environment.js";
import { MovieList } from "./pages/MovieList";

function App() {
  const [{ data, loading, error }] = useAxios(
    `${environment.baseUrl.api}/movie`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return <MovieList movies={data} />;
}

export default App;
