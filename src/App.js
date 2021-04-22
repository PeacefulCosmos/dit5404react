import useAxios from "axios-hooks";
import { environment } from "./environment/environment.js";
import { MovieList } from "./pages/MovieList";
import {Nav}  from "./components/shared/Nav";
import {Main} from "./pages/Main";
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';

function App() {
  const [{ data, loading, error }] = useAxios(
    `${environment.baseUrl.api}/movie`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return <MovieList movies={data} />;

  // return (
  //   <Router>
  //     <div>
  //       <Nav/>
  //       <Switch>
  //         <Route path="./pages/main" component={Main}/>
  //         <Route path="./pages/movie-list" component={MovieList}/>
  //       </Switch>
  //     </div>
  //   </Router>
  // );
}

export default App;
