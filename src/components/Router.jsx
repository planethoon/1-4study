import { RouterContext } from "../context/RouterContext";
import { useEffect, useState, isValidElement } from "react";

const Router = ({ children = [] }) => {
  const [pathState, setPathState] = useState(location.pathname);

  const contextData = {
    pathname: pathState,
  };

  window.onpopstate = async (e) => {
    if (e.detail) {
      setPathState(e.detail);
    } else {
      setPathState(location.pathname);
    }
  };

  const childrenArray = Array.isArray(children) ? children : [children];

  const childrenToRender = (comp) => {
    if (!isValidElement(comp)) {
      return false;
    }
    return comp.props.path === location.pathname;
  };

  return (
    <RouterContext.Provider value={contextData}>
      {childrenArray.find(childrenToRender)}
    </RouterContext.Provider>
  );
};

export default Router;
