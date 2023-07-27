import { useRouter } from "./hooks/useRouter";
import { useContext, useEffect, useState } from "react";
import { RouterContext } from "./context/RouterContext";

function Root() {
  const { push } = useRouter();

  console.log(
    `루트 렌더함 history.state: ${history.state} location.pathname: ${location.pathname} `
  );

  return (
    <div className="root">
      <h1>root</h1>
      <div className="card">
        <button
          onClick={() => {
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
