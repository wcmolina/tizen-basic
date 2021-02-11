import { Lrud } from "lrud";

const navigation = new Lrud();

navigation.registerNode("root", {
  orientation: "vertical",
});

window.navigation = navigation;

navigation.on("move", (event) => {
  event.node && event.node.onMove && event.node.onMove(event);
});

navigation.on("focus", (event) => {});

// Todo: Throttle this?
document.onkeydown = (event) => {
  navigation.handleKeyEvent(event);
};

export default navigation;
