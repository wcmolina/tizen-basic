import React from "react";
import NavigationContext from "../context/NavigationContext";
import Card from "./Card";
import withNavigation from "../hoc/withNavigation";

const onMove = (event) => {
  console.log("Cool, I'll move to the next/prev card");
};

const Row = ({ id, title, movies, className }) => {
  return movies.length > 0 ? (
    <>
      <h2>{title}</h2>
      <div className={className}>
        <NavigationContext.Provider value={{ parent: id }}>
          {movies.map((movie) => (
            <Card
              id={`${id}-card-${movie.id}`}
              key={movie.id}
              imgUrl={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            />
          ))}
        </NavigationContext.Provider>
      </div>
    </>
  ) : // Todo: handle this in the parent component?
  null;
};

export default withNavigation({ orientation: "horizontal", onMove })(Row);
