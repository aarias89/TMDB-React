import React from "react";
import MovieListContainer from "./components/MovieListContainer";
import MovieDetail from "./components/MovieDetail";

import { TMDB_API_KEY } from "./KEYS";
import axios from "axios";
import SearchBar from "./components/SearchBar";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    favMovies: {},
    selectedMovieId: null,
    searchResults: {}
  };

  fetchMovieData(key, param) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${param}?api_key=${key}&language=en-US`
    );
  }
  fetchMovieDataByKeyWord(key, param) {
    return axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${param}&page=1&include_adult=false`
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

  handleMOvieSearchTerm = term => {
    this.fetchMovieDataByKeyWord(TMDB_API_KEY, term)
      .then(res => {
        this.setState({ searchResults: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="app-wrapper">
          <h1 id="app-header">TMDB-React</h1>
          <SearchBar searchMovie={this.handleMOvieSearchTerm} />
          <MovieListContainer
            listData={this.state.searchResults}
            onMovieSelectID={this.handleMovieSelect}
          />
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
