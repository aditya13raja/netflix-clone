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
        src={"https://www.youtube.com/embed/" + trailerVideo.key + "?autoplay=1&mute=1&loop-1&playlist=" + trailerVideo.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
};

export default VideoBackground;