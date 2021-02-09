import React from "react";

const MovieRow = ({ title, movies }) => {
  return movies && movies.length > 0 ? (
    <>
      <h2>{title}</h2>
      <div className="flex flex-nowrap overflow-x-scroll no-scrollbar">
        {movies.map((movie) => (
          <img
            className="h-80"
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        ))}
      </div>
    </>
  ) : (
    <p>No movies to show</p>
  );
};

MovieRow.defaultProps = {
  movies: [],
};

export default MovieRow;
