import React from "react";
import { Suspense } from "react";
// import MovieListItem from "./MovieListItem";
const MovieListItem = React.lazy(() => import("./MovieListItem"));

const MovieListContainer = props => {
  const { results } = props.listData;

  if (!results) {
    return <div></div>;
  }
  const movieItems = results.map(movie => {
    return (
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <MovieListItem
          key={movie.title}
          movie={movie}
          onMovieSelectID={props.onMovieSelectID}
        />
      </Suspense>
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
