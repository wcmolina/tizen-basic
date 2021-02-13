import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import navigation from "../utils/navigation";
import NavigationContext from "../context/NavigationContext";
import { cleanObject } from "../utils/common";

const Navigable = ({
  id = nanoid(),
  className = null,
  children,
  isFocusable,
  orientation,
  onMove,
  onFocus,
  ...other
}) => {
  const { parent } = React.useContext(NavigationContext);

  useEffect(() => {
    // Cleanup
    return () => {
      if (navigation.getNode(id)) {
        navigation.unregisterNode(id);
      }
    };
  }, []);

  if (!navigation.getNode(id)) {
    navigation.registerNode(
      id,
      cleanObject({ parent, isFocusable, orientation, onMove, onFocus })
    );
  }

  const renderContent = () => (
    <div id={id} className={className} {...other}>
      {children}
    </div>
  );

  if (isFocusable) {
    // Leaf node, no need to wrap it in a NavigationContext provider
    return renderContent();
  } else {
    return (
      // Child Navigable components will use this id as their parent id
      <NavigationContext.Provider value={{ parent: id }}>
        {renderContent()}
      </NavigationContext.Provider>
    );
  }
};

export default Navigable;
