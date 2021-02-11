import { Lrud } from "lrud";

const navigation = new Lrud();

navigation.registerNode("root", {
  orientation: "vertical",
});

window.navigation = navigation;

navigation.on("move", (event) => {
  console.log("Move", event);
});

navigation.on("focus", (id) => {
  console.log("Focus", id);
});

// Todo: Throttle this?
document.onkeydown = (event) => {
  navigation.handleKeyEvent(event);
};

export default navigation;
