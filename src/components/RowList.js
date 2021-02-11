import React from "react";
import NavigationContext from "../context/NavigationContext";
import withNavigation from "../hoc/withNavigation";

const onMove = (event) => {
  console.log("Cool, I'll move to the next/prev row");
};

const RowList = ({ id, children }) => {
  return (
    <NavigationContext.Provider value={{ parent: id }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default withNavigation({ orientation: "vertical", onMove })(RowList);
