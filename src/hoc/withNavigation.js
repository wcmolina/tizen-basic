import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import navigation from "../utils/navigation";
import NavigationContext from "../context/NavigationContext";
import { cleanObject } from "../utils/cleanObject";

const withNavigation = (navProps = {}) => (Component) => {
  const Navigable = (props) => {
    const { id = nanoid(), ...other } = props;
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
      navigation.registerNode(id, cleanObject({ parent, ...navProps }));
    }

    return (
      <div id={id}>
        <Component id={id} {...other} />
      </div>
    );
  };
  return Navigable;
};

export default withNavigation;
