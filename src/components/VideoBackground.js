import { useSelector} from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = () => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer();

  if (!trailerVideo) return;
  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-[100%] h-[100%] "
        src={"https://www.youtube.com/embed/" + trailerVideo.key + "?autoplay=1&mute=1&loop-1&controls=0&rel=0&playlist=" + trailerVideo.key}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  );
};

export default VideoBackground;