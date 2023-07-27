import { useRouter } from "./hooks/useRouter";
import { useEffect, useState } from "react";
import { RouterContext } from "./context/RouterContext";

function About() {
  const { push } = useRouter();

  console.log(
    `어바웃 렌더함 history.state: ${history.state} location.pathname: ${location.pathname} `
  );

  return (
    <div className="root">
      <h1>about</h1>
      <div className="card">
        <button
          onClick={() => {
            push("/");
          }}
        >
          go main
        </button>
      </div>
    </div>
  );
}

export default About;
