import React from "react";
import MovieListContainer from "./components/MovieListContainer";
import MovieDetail from "./components/MovieDetail";

import { TMDB_API_KEY } from "./KEYS";
import axios from "axios";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    favMovies: {},
    selectedMovieId: null
  };

  fetchMovieData(key, param) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${param}?api_key=${key}&language=en-US`
    );
  }

  componentDidMount() {
    this.fetchMovieData(TMDB_API_KEY, "popular")
      .then(res => {
        this.setState({ favMovies: res.data, isLoaded: true });
      })
      .catch(error => {
        console.log(error.message);
      });
  }
  handleClick = () => {
    this.setState({ selectedMovieId: {} });
  };

  handleMovieSelect = val => {
    this.setState({ selectedMovieId: val });
  };

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="app-wrapper">
          <h1 id="app-header">TMDB-React</h1>
          <MovieDetail
            movieID={this.state.selectedMovieId}
            onMovieSelectID={this.handleMovieSelect}
          />
          <MovieListContainer
            contentTitle="Favorite Movies"
            listData={this.state.favMovies}
            onMovieSelectID={this.handleMovieSelect}
          />
        </div>
      );
    }
  }
}
