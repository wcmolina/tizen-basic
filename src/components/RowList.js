import React from "react";
import NavigationContext from "../context/NavigationContext";
import withNavigation from "../hoc/withNavigation";
import { getComputedHeight } from "../utils/calc";
import anime from "animejs";

// Stateless component containing row list content
const RowListContent = ({ id, children }) => (
  <NavigationContext.Provider value={{ parent: id }}>
    {children}
  </NavigationContext.Provider>
);

const RowList = (props) => {
  // Not really a state variable, instance variable works just fine
  let position = 0;

  const onMove = (event = {}) => {
    try {
      // Given only cards are focusable and they are in rows, we need to calc the card's row/parent height
      const { offset = 1, leave = {}, enter = {}, node = {} } = event;
      const parentEl = document.getElementById(leave.parent);
      const height = getComputedHeight(parentEl);

      const nextPosition = offset === 1 ? position - height : position + height;

      // Todo: move these to an util file
      if (offset === 1) {
        // Fade out (leave element's parent)
        anime({
          targets: `#${leave.parent}`,
          duration: 350,
          opacity: 0,
          easing: "linear",
        });
      } else {
        // Fade in (enter element's parent)
        anime({
          targets: `#${enter.parent}`,
          duration: 350,
          opacity: 1,
          easing: "linear",
        });
      }

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
