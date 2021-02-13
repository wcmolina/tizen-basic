import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCardDetails } from "../redux/actions/homeActions";
import Navigable from "./Navigable";

const Card = ({ id, movie }) => {
  const dispatch = useDispatch();

  const onFocus = () => {
    dispatch(
      updateCardDetails({ title: movie.title, overview: movie.overview })
    );
  };

  return (
    <Navigable id={id} isFocusable={true} onFocus={onFocus}>
      <img
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        className="row-card"
      />
    </Navigable>
  );
};

export default Card;
