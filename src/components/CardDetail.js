import React from "react";
import { useSelector } from "react-redux";
import { truncate } from "../utils/common";

const CardDetail = () => {
  const cardDetails = useSelector((state) => state.home.cardDetails);

  return (
    <div className="card-detail">
      <h1>{cardDetails.title || ""}</h1>
      <p className="card-detail-description">
        {truncate(cardDetails.overview || "", 550)}
      </p>
    </div>
  );
};

export default CardDetail;
