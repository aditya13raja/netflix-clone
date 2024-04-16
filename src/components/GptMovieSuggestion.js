import React from 'react';
import {useSelector} from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const {movieNames, movieResults } = useSelector(store => store.gpt);
  if(!movieNames) return null;

  return (
    <div className="flex justify-center mt-4 pb-10">
      <div className="p-10 pt-4 w-3/5 bg-black/60 text-white rounded-xl backdrop-blur-sm">
        {
          movieNames.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))
        }
      </div>
    </div>
  );
};

export default GptMovieSuggestion;