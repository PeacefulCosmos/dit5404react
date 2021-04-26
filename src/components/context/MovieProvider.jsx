import useAxios from "axios-hooks";
import React from "react";
import { environment } from "../../environment/environment";

const initialState = {
  movies: [],
  loading: false,
};

const MovieContext = React.createContext(initialState);

export const useMovieState = () => React.useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [{ data, loading }] = useAxios(`${environment.baseUrl.api}/movie`);

  return (
    <MovieContext.Provider
      value={{
        movies: data ?? [],
        loading,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
