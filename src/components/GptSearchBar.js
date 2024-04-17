import React, {useRef} from 'react';
import gemini from "../utils/gemini";
import {API_OPTIONS} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addGptMoviesResult} from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const searchMovieTMDB = async (movie) => {
      const data = await fetch(
        'https://api.themoviedb.org/3/search/movie?query='+
        movie +
        '&include_adult=false&language=en-US&page=1',
        API_OPTIONS);
      const json = await data.json();
      return json.results;
    }

    const model = gemini.getGenerativeModel({ model: "gemini-pro"});

    const prompt = "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Give me name of only 5 movies, as comma seperated as given in the example ahead. Example: Don, Freaddy, I am Khan, DDLJ, Spider-Man";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    const geminiMovies = text.split(", ");
    console.log(geminiMovies);

    const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));

    const movieData = await Promise.all(promiseArray);

    console.log(movieData);

    dispatch(addGptMoviesResult({movieNames: geminiMovies, movieResults: movieData}));
  }

  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="bg-gray-900 w-screen m-2 md:w-3/5 grid grid-cols-12 p-2 rounded-xl"
        onSubmit={(e) => {e.preventDefault();}}
      >
        <input
          ref={searchText}
          className="m-2 px-4 col-span-9 rounded-lg bg-gray-700 text-gray-100"
          type="text"
          placeholder="What would you like to watch today?" />
        <button
          className="m-2 bg-red-800 font-bold text-white p-2 col-span-3 rounded-lg"
          type="submit"
          onClick={handleGptSearchClick}
        >Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;