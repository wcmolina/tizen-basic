import React from "react";
import withNavigation from "../hoc/withNavigation";

const Card = ({ imgUrl }) => {
  return <img src={imgUrl} className="inline-block" />;
};

export default withNavigation({ isFocusable: true })(Card);
