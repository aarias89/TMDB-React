import React from "react";
import axios from "axios";
import YTSearch from "youtube-api-search";
import { TMDB_API_KEY, YT_API_KEY } from "../KEYS";
import MovieListContainer from "./MovieListContainer";
import TrailerComponent from "./TrailerComponent";
export default class MovieDetail extends React.Component {
  state = {
    selectedMovieData: {},
    isLoaded: false,
    relatedMovies: { results: [] },
    selectedTrailer: []
  };

  componentDidMount() {
    this.fetchMovieData(TMDB_API_KEY, this.props.movieID)
      .then(res => {
        this.setState({ selectedMovieData: res.data, isLoaded: true });
        return this.fetchMovieData(
          TMDB_API_KEY,
          this.props.movieID + "/recommendations"
        );
      })
      .then(res => {
        this.setState({ relatedMovies: res.data });
      });
  }
  componentDidUpdate(prevProps) {
    if (this.props.movieID !== prevProps.movieID) {
      this.fetchMovieData(TMDB_API_KEY, this.props.movieID)
        .then(res => {
          this.setState({ selectedMovieData: res.data, isLoaded: true });
          return this.fetchMovieData(
            TMDB_API_KEY,
            this.props.movieID + "/recommendations"
          );
        })
        .then(res => {
          this.setState({ relatedMovies: res.data, selectedTrailer: [] });
        });
    }
  }
  videoSearch(term) {
    YTSearch({ key: YT_API_KEY, term: term + "trailer" }, videos => {
      this.setState({
        selectedTrailer: videos[0]
      });
    });
  }

  fetchMovieData(key, param) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${param}?api_key=${key}&language=en-US`
    );
  }

  render() {
    const {
      genres,
      title,
      budget,
      tagline,
      vote_average,
      overview,
      backdrop_path,
      poster_path
    } = this.state.selectedMovieData;
    const imgURL = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
    var movieDetailInfoStyle = {
      backgroundSize: "cover",
      backgroundPosition: "center center  no-repeat",
      backgroundImage: `url(${imgURL + backdrop_path})`,
      zIndex: "0",
      width: "63%"
    };
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return <div></div>;
    } else {
      return (
        <div id="movie-detail-wrapper">
          <div id="movie-detail-container">
            <div
              onClick={e => this.setState({ isLoaded: false })}
              className="close-x close-circle"
            ></div>
            <div id="movie-detail-poster">
              <img src={imgURL + poster_path} alt={title + "poster"} />
            </div>

            <div id="mov-detail-style" style={movieDetailInfoStyle}>
              <div id="img-overlay"></div>
              <div id="movie-detail-right-panel">
                <div id="movie-title">
                  <h2>{title}</h2>
                  <p>{tagline}</p>
                </div>
                <div id="movie-overview">
                  <p>{overview}</p>
                </div>
                <div id="movie-data">
                  Rating: {vote_average}
                  <br />
                  Budget: {budget}
                  <br />
                  Genres : {genres.map(genre => genre.name + " ")}
                </div>
              </div>
              <div id="yt-container">
                <button
                  onClick={() => {
                    this.videoSearch(title);
                  }}
                >
                  Watch Trailer
                </button>
                <TrailerComponent video={this.state.selectedTrailer} />
              </div>
            </div>
          </div>
          <MovieListContainer
            contentTitle="Related Movies"
            listData={this.state.relatedMovies}
            onMovieSelectID={this.props.onMovieSelectID}
          />
        </div>
      );
    }
  }
}
