import { RouterContext } from "../context/RouterContext";
import { useEffect, useState } from "react";

const Router = ({ children }) => {
  const [pathState, setPathState] = useState(location.pathname);

  window.onpopstate = async (e) => {
    if (e.detail) {
      setPathState(e.detail);
    } else {
      setPathState(location.pathname);
    }

    console.log("popstate location.pathname", location.pathname);
  };

  useEffect(() => {
    console.log("pathState Changed to", pathState);
  }, [pathState]);

  const contextData = {
    pathname: pathState,
  };

  return (
    <RouterContext.Provider value={contextData}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
