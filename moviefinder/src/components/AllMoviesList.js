import React, { useState, useEffect } from "react";
import MovieComponent from "./MovieComponent";

const AllMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  useEffect(() => {
    fetch("http://localhost:9292/allmovies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleNextClick = () => {
    setStart(start + 10);
    setEnd(end + 10);
  };

  const handlePrevClick = () => {
    setStart(start - 10);
    setEnd(end - 10);
  };

  return (
    <div style={{ backgroundColor: "#eee", padding: "20px" }}>
      <div>
        <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Movie Finder</h1>
      </div>
      <div>
        <div>
          <h3
            className="ui black header"
            style={{ fontSize: "24px", marginBottom: "20px" }}
          >
            All Movies
          </h3>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {movies.slice(start, end).map((movie) => (
            <div
              key={movie.id}
              style={{
                backgroundColor: "#f3f3f3",
                marginBottom: "10px",
                marginRight: "10px",
                padding: "10px",
                cursor: "pointer",
                width: "calc(10% - 10px)",
              }}
              onClick={() => handleMovieClick(movie)}
            >
              <div className="content">
                <div className="header" style={{ fontSize: "18px" }}>
                  {movie.title}
                </div>
                <div className="meta" style={{ fontSize: "16px" }}>
                  {movie.year}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="ui button"
            onClick={handlePrevClick}
            disabled={start === 0}
          >
            Previous
          </button>
          <button
            className="ui button"
            onClick={handleNextClick}
            disabled={end === movies.length}
          >
            Next
          </button>
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

export default AllMoviesList;
