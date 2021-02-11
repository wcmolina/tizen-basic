import React from "react";
import NavigationContext from "../context/NavigationContext";
import withNavigation from "../hoc/withNavigation";

const RowList = ({ id, children }) => {
  return (
    <NavigationContext.Provider value={{ parent: `rowlist-${id}` }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default withNavigation({})(RowList);
