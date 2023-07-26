import { useContext } from "react";
import { RouterContext } from "../main";

export function useRouter() {
  const routerPath = useContext(RouterContext);

  // const handler = (path, trigger) => {
  //   console.log(`함수 작동 ${location.pathname} to ${path}`);
  //   trigger((e) => !e);

  //   return history.pushState(
  //     { from: location.pathname, to: path },
  //     "",
  //     `${path}`
  //   );
  // };

  const handler = (path) => {
    console.log(`함수 작동 ${location.pathname} to ${path}`);

    return history.pushState(
      { from: location.pathname, to: path },
      "",
      `${path}`
    );
  };

  return { push: handler };
}
