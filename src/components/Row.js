import React from "react";
import NavigationContext from "../context/NavigationContext";
import Card from "./Card";
import withNavigation from "../hoc/withNavigation";

// Stateless component containing row's content
const RowContent = ({ id, title, movies, className }) => (
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
);

const Row = (props) => {
  const onMove = (event) => {
    console.log("Cool, I'll move to the next/prev card");
  };

  const Navigable = withNavigation({
    orientation: "horizontal",
    onMove,
  })(RowContent);

  return <Navigable {...props} />;
};

export default Row;
