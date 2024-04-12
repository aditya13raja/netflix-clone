import {API_OPTIONS} from "../utils/constants";
import {useEffect} from "react";
import {addTrailerVideo} from "../utils/moviesSlice";
import {useDispatch, useSelector} from "react-redux";

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  const dispatch = useDispatch();

  const getVideoTrailer = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
    const json = await data.json();
    console.log(json);

    const filterTrailers = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterTrailers.length > 0 ? filterTrailers[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    getVideoTrailer();
  }, []);

  if (!trailerVideo) return;


  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + trailerVideo.key }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
};

export default VideoBackground;