import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlaceHolderImage from "./../assets/placeholder.svg";

const API_URL = import.meta.env.VITE_API_URL;

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const response = await fetch(
        `https://www.omdbapi.com?apikey=${API_URL}&i=${id}`,
      );
      const data = await response.json();
      console.log(data);
      setMovie(data);
    };
    fetchMovieDetail(id);
  }, [id]);

  const handleImageError = (e) => {
    e.target.src = PlaceHolderImage;
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="Detail-container">
        <div className="img-container">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : PlaceHolderImage}
            alt={movie.Title}
            className="movie-img"
            onError={handleImageError}
          />
        </div>
        <div className="info-container">
          <h2>{movie.Title}</h2>
          <p>Year: {movie.Year}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Plot: {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
