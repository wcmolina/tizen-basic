import React from "react";
import NavigationContext from "../context/NavigationContext";
import withNavigation from "../hoc/withNavigation";
import { getComputedHeight } from "../utils/calc";
import anime from "animejs";

// Stateless component containing row list content
const RowListContent = ({ id, className = "", children }) => (
  <div className={className}>
    <NavigationContext.Provider value={{ parent: id }}>
      {children}
    </NavigationContext.Provider>
  </div>
);

const RowList = (props) => {
  // Not really a state variable, instance variable works just fine
  let position = 594;

  const onMove = (event = {}) => {
    try {
      // Given only cards are focusable and they are in rows, we need to calc the card's row/parent height
      const { offset = 1, leave = {}, node = {} } = event;
      //const parentEl = document.getElementById(leave.parent);
      //const height = getComputedHeight(parentEl);
      const height = 392;

      const nextPosition = offset === 1 ? position - height : position + height;
      console.log(nextPosition);

      anime({
        targets: `#${node.id}`,
        translateY: [position, nextPosition],
        duration: 350,
        easing: "linear",
      });

      position = nextPosition;
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
