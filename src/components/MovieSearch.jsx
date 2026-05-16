import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "./../assets/search.svg";
import MovieCard from "./MovieCard";

const API_URL = import.meta.env.VITE_API_URL;

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovie("batman");
  }, []);

  const searchMovie = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log(data);
      if(data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };
  //searchMovie();
  return (
    <div className="search-container">
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchMovie(searchTerm)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <div key={movie.imdbID}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Нічого не знайдено...</h2>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
