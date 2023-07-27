import { useRouter } from "./hooks/useRouter";
import { useEffect, useState } from "react";
import { RouterContext } from "./context/RouterContext";

function About() {
  const { push } = useRouter();

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
