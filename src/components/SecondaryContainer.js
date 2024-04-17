import React from 'react';
import {useSelector} from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (

    <div className="bg-black">
      <div className="relative z-20 pl-12 -mt-80 md:-mt-52">
        {
          movies.nowPlayingMovies && (
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          )
        }
        { movies.upcomingMovies && (
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        )
        }
        { movies.popularMovies && (
              <MovieList title={"Popular"} movies={movies.popularMovies} />
          )
        }
        { movies.topRatedMovies && (
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        )
        }
      </div>
    </div>
  );
};

export default SecondaryContainer;