import React from "react";
import axios from "axios";
import { TMDB_API_KEY } from "../KEYS";

export default class MovieDetail extends React.Component {
  state = {
    selectedMovieData: {},
    isLoaded: false
  };

  componentDidMount() {
    this.fetchMovieData(TMDB_API_KEY, this.props.movieID).then(res => {
      this.setState({ selectedMovieData: res.data, isLoaded: true });
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.movieID !== prevProps.movieID) {
      this.fetchMovieData(TMDB_API_KEY, this.props.movieID).then(res => {
        this.setState({ selectedMovieData: res.data, isLoaded: true });
      });
    }
  }

  fetchMovieData(key, param) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${param}?api_key=${key}&language=en-US`
    );
  }

  render() {
    const {
      id,
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
      zIndex: "0"
      // opacity: ".2"
    };
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return <div></div>;
    } else {
      return (
        <div id="movie-detail-container">
          <div>
            <img src={imgURL + poster_path} alt={title + "poster"} />
          </div>
          <div style={movieDetailInfoStyle}>
            <div>
              <h2>{title}</h2>
              <p>{tagline}</p>
            </div>
            <div>
              <p>{overview}</p>
            </div>
            <div>
              Rating: {vote_average}
              <br />
              Budget: {budget}
              <br />
              Genres : {genres.map(genre => genre.name + " ")}
            </div>
          </div>
        </div>
      );
    }
  }
}
