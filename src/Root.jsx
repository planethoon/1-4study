import { useRouter } from "./hooks/useRouter";

import "./App.css";

function Root() {
  const { push } = useRouter();

  return (
    <div id="root">
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
