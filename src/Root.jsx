import { useRouter } from "./hooks/useRouter";
import { useContext, useEffect, useState } from "react";
import { RouterContext } from "./main";

function Root() {
  const { push } = useRouter();
  const [, trigger] = useState(true);
  const pathContext = useContext(RouterContext);

  console.log(
    `루트 렌더함 history.state: ${history.state} location.pathname: ${location.pathname} `
  );

  return (
    <div className="root">
      <h1>root</h1>
      <div className="card">
        <button
          onClick={() => {
            pathContext.setPath();
            push("/about");
          }}
        >
          about
        </button>
      </div>
    </div>
  );
}

export default Root;
