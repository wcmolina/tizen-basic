import { Lrud } from "lrud";

const navigation = new Lrud();

window.navigation = navigation;

navigation.on("move", (event) => {
  event.node && event.node.onMove && event.node.onMove(event);
});

navigation.on("focus", (event) => {
  event.node && event.node.onFocus && event.node.onFocus();
});

// Todo: Throttle this?
document.onkeydown = (event) => {
  navigation.handleKeyEvent(event);
};

export default navigation;
