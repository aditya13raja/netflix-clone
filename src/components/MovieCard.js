import React from 'react';
import {IMG_CDN_URL} from "../utils/constants";

const MovieCard = ({posterPath}) => {
  return (
    <div>
      <img
        className="w-96 pr-4"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;