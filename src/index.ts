import { initRouter } from "./router";
import { state } from "./state";

//components
import "./components/text";
import "./components/buttoms";
import "./components/hands";

(function () {
  state.getStorage();

  const root: any = document.querySelector(".root");
  initRouter(root);
})();
