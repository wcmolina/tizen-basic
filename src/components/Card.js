import React from "react";
import withNavigation from "../hoc/withNavigation";

const Card = ({ imgUrl }) => {
  return <img src={imgUrl} className="inline-block h-72" />;
};

export default withNavigation({ isFocusable: true })(Card);
