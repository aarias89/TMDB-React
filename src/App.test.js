import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MovieListContainer from "./components/MovieListContainer";

import MovieListItem from "./components/MovieListItem";
import MovieDetail from "./components/MovieDetail";

let res = {
  results: [
    {
      popularity: 33.399,
      vote_count: 2741,
      video: false,
      poster_path: "/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
      id: 447404,
      adult: false,
      backdrop_path: "/nDP33LmQwNsnPv29GQazz59HjJI.jpg",
      original_language: "en",
      original_title: "Pokémon Detective Pikachu",
      genre_ids: [28, 12, 14],
      title: "Pokémon Detective Pikachu",
      vote_average: 6.9,
      overview:
        "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
      release_date: "2019-05-03"
    },
    {
      popularity: 8.852,
      vote_count: 156,
      video: false,
      poster_path: "/fS8P1YLQ2LVhct7nvAKvkHLelBG.jpg",
      id: 36897,
      adult: false,
      backdrop_path: "/s1FW8gCXSmSlsHvKZqbgJuuGCH2.jpg",
      original_language: "ja",
      original_title: "Pokémon: Mewtwo Returns",
      genre_ids: [16, 10751],
      title: "Pokémon: Mewtwo Returns",
      vote_average: 6.5,
      overview:
        "Ash, Misty, and Brock continue exploring the Johto region, then have to rescue Pikachu after Jessie and James of Team Rocket kidnap him. The search leads them to the hidden plateau where Mewtwo has established a haven for the cloned Pokémon from the previous film. The evil Giovanni is plotting to recapture Mewtwo and renew his efforts to create an army of bio-engineered Pokémon. Aided by the reluctant Meowth, Ash and his friends defeat Giovanni and his henchman.",
      release_date: "2000-12-30"
    }
  ]
};

let movie = {
  popularity: 33.399,
  vote_count: 2741,
  video: false,
  poster_path: "/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
  id: 447404,
  adult: false,
  backdrop_path: "/nDP33LmQwNsnPv29GQazz59HjJI.jpg",
  original_language: "en",
  original_title: "Pokémon Detective Pikachu",
  genre_ids: [28, 12, 14],
  title: "Pokémon Detective Pikachu",
  vote_average: 6.9,
  overview:
    "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
  release_date: "2019-05-03"
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MovieListContainer listData={res} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MovieListItem movie={movie} key={movie.title} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MovieDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
