import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
  return (
    <div className="pb-5" >
      <h1 className="text-3xl text-white pb-2">{title}</h1>
      <div className=" ">
        <div className=" flex flex-nowrap overflow-x-scroll no-scrollbar">

          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;