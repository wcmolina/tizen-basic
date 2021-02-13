import React from "react";
import { getComputedHeight } from "../utils/calc";
import anime from "animejs";
import Navigable from "./Navigable";
import navigation from "../utils/navigation";

const RowList = ({ id, className, children }) => {
  let position = 0;

  const onMove = (event = {}) => {
    try {
      const { offset = 1, leave = {}, enter = {}, node = {} } = event;

      // The rows that contain 'leave' and 'enter' respectively
      const leaveRowNode = navigation.getNode(leave.parent) || {};
      const enterRowNode = navigation.getNode(enter.parent) || {};

      // rowParentEl should be the one that wraps both the row title and the row's content
      const rowParentEl = document.getElementById(leaveRowNode.parent);

      // We need to calculate both the card's row height and the row title height (parentEl height)
      const height = getComputedHeight(rowParentEl);
      const nextPosition = offset === 1 ? position - height : position + height;

      // Todo: move these to an util file
      if (offset === 1) {
        // Fade out (the parent of the row that contains 'leave')
        anime({
          targets: `#${leaveRowNode.parent}`,
          duration: 350,
          opacity: 0,
          easing: "linear",
        });
      } else {
        // Fade in (the parent of the row that contains 'enter')
        anime({
          targets: `#${enterRowNode.parent}`,
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

  return (
    <Navigable
      id={id}
      className={className}
      orientation="vertical"
      onMove={onMove}
    >
      {children}
    </Navigable>
  );
};

export default RowList;
