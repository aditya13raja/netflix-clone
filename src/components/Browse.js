import React, {useEffect} from 'react';
import Header from "./Header";
import {API_OPTIONS} from "../utils/constants";

function Browse() {

  // const getNowPlayingMovies = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/now_playing?page=1",
  //     API_OPTIONS
  //   );
  //   const json = data.json();
  //   console.log(json);
  // }

  const getNowPlayingMovies = () => {fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    .then(response => response.json())
    .then(response => console.log(response.results))
    .catch(err => console.error(err));}

  useEffect(() => {
    getNowPlayingMovies();
  })

  return (
    <div>
      <Header />

    </div>
  );
}

export default Browse;