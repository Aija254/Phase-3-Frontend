import React, { useState, useEffect } from "react";
import MovieComponent from "./MovieComponent";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const token = localStorage.getItem("user_id");

  useEffect(() => {
    fetch(`http://localhost:9292/movies/${token}`)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, [token]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <div>
        <h1 >Movie Finder</h1>
      </div>
      <div>
        <div>
          <h3 className="ui black header">My Movies</h3>
        </div>
        <div >
          {movies.length > 0 &&
            movies.map((movie) => (
              <div
                key={movie.id}
                style={{ backgroundColor: "#f3f3f3" }}
                onClick={() => handleMovieClick(movie)}
              >
                <div className="content">
                  <div className="header">{movie.title}</div>
                  <div className="meta">{movie.dueDate}</div>
                  <div className="description">{movie.description}</div>
                  
                </div>
              </div>
            ))}
        </div>
        {selectedMovie && (
          <MovieComponent
            id={selectedMovie.id}
            title={selectedMovie.title}
            year={selectedMovie.year}
            completed={selectedMovie.completed}
          />
        )}
      </div>
    </div>
  );
};

export default MovieList;