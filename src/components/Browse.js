import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

function Browse() {
  useNowPlayingMovies();

  return (
    <div>
      <Header />

    </div>
  );
}

export default Browse;