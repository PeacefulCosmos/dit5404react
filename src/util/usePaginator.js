export const usePaginator = (movies, currentPage, moviesPerPage) => {
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalMoviesPages = Math.ceil(movies.length / moviesPerPage);
  return { currentMovies, totalMoviesPages };
};
