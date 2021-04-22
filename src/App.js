import useAxios from "axios-hooks";
import React from "react";
import { environment } from "./environment/environment.js";
import { MovieList } from "./pages/MovieList";

function App() {
  // TODO: please check backend, no data responded but status code is 200
  // TODO: You don't need to use the {env.baseUrl.api}, did you heard about API Proxy ?
  // TODO: if you do this, you don't need to use cors() in express.
  /**
   * @see https://create-react-app.dev/docs/proxying-api-requests-in-development/
   */
  const [{ data, loading, error }] = useAxios(
    `${environment.baseUrl.api}/movie`
  );

  // TODO: There is a much more `react` way to do this, see below
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;

  return <Spinner loading={loading}>
    <MovieList movies={data} />
  </Spinner>

  // return <MovieList movies={data} />;
}

const Spinner = ({ loading, children }) => {
  return (
    <React.Fragment>
      {loading ? 'loading' : children}
    </React.Fragment>
  )
}

export default App;
