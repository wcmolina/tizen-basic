import React from "react";
import NavigationContext from "../context/NavigationContext";
import withNavigation from "../hoc/withNavigation";
import { getComputedHeight } from "../utils/calc";

// Stateless component containing row list content
const RowListContent = ({ id, children }) => (
  <NavigationContext.Provider value={{ parent: id }}>
    {children}
  </NavigationContext.Provider>
);

const RowList = (props) => {
  const onMove = (event = {}) => {
    try {
      // Given only cards are focusable and they are in rows, we need to calc the card's row/parent height
      const { offset = 1, leave = {} } = event;
      const parentEl = document.getElementById(leave.parent);
      const height = getComputedHeight(parentEl);
      const direction = offset === 1 ? "up" : "down";
      console.log(`I need to move ${height} pixels ${direction}`);
    } catch (error) {
      console.log("An error occurred trying to move between rows");
      console.log(error);
    }
  };

  const Navigable = withNavigation({
    orientation: "vertical",
    onMove,
  })(RowListContent);

  return <Navigable {...props} />;
};

export default RowList;
