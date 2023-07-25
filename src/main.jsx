import ReactDOM from "react-dom/client";
import Route from "./components/Route.jsx";
import Root from "./Root.jsx";
import About from "./about.jsx";
import "./index.css";
import { createContext, useContext } from "react";

export const RouterContext = createContext("");

export const Router = ({ children, path }) => {
  return (
    <div className="root">
      <RouterContext.Provider value={path}>{children}</RouterContext.Provider>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
