import ReactDOM from "react-dom/client";
import Route from "./components/Route.jsx";
import Root from "./Root.jsx";
import About from "./About.jsx";
import "./index.css";
import "./App.css";
import Router from "./components/Router.jsx";

const container = document.getElementById("root");

ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);

/*

1. 라우터 아래 라우트가 있음. 
2. 이 라우트에 기본적으로 path가 주어짐. 
3. 이 패스를 일종의 키로 현재 페이지의 쿼리가 패스와 일치하다면 프롭스로 전달된 컴포넌트를 랜더. 
4. 랜더를 하려면 상태가 변경되어야 함. 
5. 라우터 아래 라우트가 있기 때문에 랜더링 변경이 필요하다면, 해당 라우트 안에 있는 상태가 업데이트 되어야 함. 
-> 컴포넌트를 랜더 돌리기 위해. 
6. history.pushState를 사용해서 페이지가 새로고침되지 않는 선에서 페이지 내 컴포넌트가 랜더 되어야 한다. 

*/
