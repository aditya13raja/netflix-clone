import {useDispatch, useSelector} from "react-redux";
import {API_OPTIONS} from "../utils/constants";
import {addTrailerVideo} from "../utils/moviesSlice";
import {useEffect, useState} from "react";

const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
// TODO: Make video id dynamically fetch
  const getVideoTrailer = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/693134/videos?language=en-US', API_OPTIONS);
    const json = await data.json();


    const filterTrailers = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterTrailers.length > 0 ? filterTrailers[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    !trailerVideo && getVideoTrailer();
  }, []);
}

export default useMovieTrailer;