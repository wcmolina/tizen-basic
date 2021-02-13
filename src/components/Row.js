import React from "react";
import anime from "animejs";
import Card from "./Card";
import { getComputedWidth } from "../utils/calc";
import Navigable from "./Navigable";

const Row = ({ id, title, movies }) => {
  let position = 0;

  const onMove = (event) => {
    const { offset = 1, leave = {} } = event;
    const leaveEl = document.getElementById(leave.id);
    const width = getComputedWidth(leaveEl);
    const newPosition = offset === 1 ? position - width : position + width;

    // Move the whole row to the left or right
    anime({
      targets: `#${leave.parent}`,
      translateX: [position, newPosition],
      duration: 350,
      easing: "linear",
    });

    position = newPosition;
  };

  return (
    <Navigable>
      <>
        <h2 className="row-title">{title}</h2>
        <Navigable
          id={id}
          className="flex no-wrap"
          orientation="horizontal"
          onMove={onMove}
        >
          {movies.map((movie) => (
            <Card
              id={`${id}-card-${movie.id}`}
              key={movie.id}
              imgUrl={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            />
          ))}
        </Navigable>
      </>
    </Navigable>
  );
};

export default Row;
