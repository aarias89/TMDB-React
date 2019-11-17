import React from "react";

const MovieListItem = props => {
  const { title, poster_path } = props.movie;
  const imgURL = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
  return (
    <li id="movie-list-item-card">
      <img src={imgURL + poster_path} alt={title + "poster"} />

      <div id="movie-list-item-details">
        <div>{title}</div>
      </div>
    </li>
  );
};

export default MovieListItem;
