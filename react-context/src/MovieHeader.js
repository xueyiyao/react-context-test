import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function MovieHeader() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h1>Movie Count: {movies.length}</h1>
    </div>
  );
}

export default MovieHeader;
