import { useRouter } from "./hooks/useRouter";
import { useEffect, useState } from "react";
import { RouterContext } from "./main";

function About() {
  const { push } = useRouter();
  const [, trigger] = useState(true);

  console.log(
    `어바웃 렌더함 history.state: ${history.state} location.pathname: ${location.pathname} `
  );

  useEffect(() => {
    console.log("about 이펙트훅");
  }, []);

  return (
    <div className="root">
      <h1>about</h1>
      <div className="card">
        <button
          onClick={() => {
            push("/", trigger);
          }}
        >
          go main
        </button>
      </div>
    </div>
  );
}

export default About;
