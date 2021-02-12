import React from "react";
import withNavigation from "../hoc/withNavigation";

const Card = ({ imgUrl }) => {
  return <img src={imgUrl} className="row-card" />;
};

export default withNavigation({ isFocusable: true })(Card);
