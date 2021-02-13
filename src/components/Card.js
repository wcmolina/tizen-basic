import React from "react";
import Navigable from "./Navigable";

const Card = ({ id, imgUrl }) => {
  return (
    <Navigable id={id} isFocusable={true}>
      <img src={imgUrl} className="row-card" />
    </Navigable>
  );
};

export default Card;
