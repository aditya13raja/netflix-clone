import React from 'react';
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import {BG_URL} from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="background-img"/>
      </div>
      <div className="pt-[40%] md:p-0">
        <GptSearchBar/>
        <GptMovieSuggestion/>
      </div>
    </>
)
  ;
};

export default GptSearchPage;