import React from "react";
import { useState, useEffect } from "react";

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
    <div>
      <h2>Movie Search</h2>
    </div>
  );
};

export default MovieSearch;
