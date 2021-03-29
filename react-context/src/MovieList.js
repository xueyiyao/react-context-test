import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function MovieList() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr>
              <td>{movie.name}</td>
              <td>{movie.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
