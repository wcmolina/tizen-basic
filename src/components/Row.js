import React from "react";
import anime from "animejs";
import NavigationContext from "../context/NavigationContext";
import Card from "./Card";
import withNavigation from "../hoc/withNavigation";
import { getComputedWidth } from "../utils/calc";

// Stateless component containing row's content
const RowContent = ({ id, title, movies }) => (
  <>
    <h2 className="row-title">{title}</h2>
    <div className="flex no-wrap">
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
  let position = 0;
  const onMove = (event) => {
    const { offset = 1, leave = {} } = event;
    const leaveEl = document.getElementById(leave.id);
    const width = getComputedWidth(leaveEl);
    const newPosition = offset === 1 ? position - width : position + width;

    anime({
      targets: `#${leave.parent}`,
      translateX: [position, newPosition],
      duration: 350,
      easing: "linear",
    });

    position = newPosition;
  };

  const Navigable = withNavigation({
    orientation: "horizontal",
    onMove,
  })(RowContent);

  return <Navigable {...props} />;
};

export default Row;
