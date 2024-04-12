import { useSelector} from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer();

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