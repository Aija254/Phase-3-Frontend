import React, { useState, useEffect } from "react";
import MovieComponent from "./MovieComponent";
import AllMoviesList from "./AllMoviesList";
import image from "../assets/scott-webb-mV9-1XjnM4Y-unsplash.jpg";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const token = localStorage.getItem("user_id");
  const myStyle = {
    backgroundImage: `url(${image})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

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
    < div style={myStyle} >
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <h1 style={{ margin: "20px", color: "orange" }}>Movie Finder</h1>
      </div>
      <div>
        <div>
          <h3 style={{ margin: "10px", color: "green" }}>My Movies</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {movies.length > 0 &&
            movies.map((movie) => (
              <div
                key={movie.id}
                className="ui card"
                style={{
                  margin: "10px",
                  cursor: "pointer",
                  minWidth: "200px",
                  maxWidth: "300px",
                }}
                onClick={() => handleMovieClick(movie)}
              >
                <div className="content">
                  <div className="header">{movie.title}</div>
                  <div className="meta">{movie.year}</div>
                </div>
              </div>
            ))}
        </div>
        {selectedMovie && (
          <MovieComponent
            id={selectedMovie.id}
            title={selectedMovie.title}
            year={selectedMovie.year}
          />
        )}
      </div>
      <div>
        <AllMoviesList />
      </div>
    </div>
    </div>
  );
};

export default MovieList;
