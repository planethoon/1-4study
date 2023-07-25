import { useContext, useEffect, useState } from "react";
import { RouterContext } from "../main";

function Route({ path, component }) {
  const [isMatch, setIsMatch] = useState(false);
  const [trigger, setTrigger] = useState(true);

  const pathContext = useContext(RouterContext);

  window.onpopstate = () => {
    setTrigger(!trigger);
  };

  useEffect(() => {
    console.log("이펙트훅 작동?");
    if (window.location.pathname === path) {
      setIsMatch(true);
    } else {
      setIsMatch(false);
    }
  }, []);

  useEffect(() => {
    console.log("pathContext", pathContext);
  }, [pathContext]);

  return isMatch ? component : <></>;
}

export default Route;
