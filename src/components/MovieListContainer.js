import React from "react";
import MovieListItem from "./MovieListItem";

const MovieListContainer = props => {
  const { results } = props.listData;

  if (!results) {
    return <div></div>;
  }
  const movieItems = results.map(movie => {
    return (
      <MovieListItem
        key={movie.id}
        movie={movie}
        onMovieSelectID={props.onMovieSelectID}
      />
    );
  });

  return (
    <div id="movie-list-container">
      <h2>{props.contentTitle}</h2>
      <ul id="movie-list">{movieItems}</ul>
    </div>
  );
};

export default MovieListContainer;
