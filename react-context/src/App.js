import React from "react";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";

function App() {
  return (
    <MovieProvider>
      <div className="app">
        <MovieHeader />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
