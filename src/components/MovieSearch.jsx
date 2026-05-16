import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "./../assets/search.svg";

const API_URL = "https://www.omdbapi.com?apikey=ee8dd3f";

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
    </div>
  );
};

export default MovieSearch;
