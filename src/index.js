import confirm from "./confirm.js";
import method from "./method.js";
import loadState from "./utils/loadState.js";

const start = function () {
  startConfirm();
  startMethod();
};

const startConfirm = function () {
  const moduleName = "confirm";
  loadState.checkLoaded(moduleName);

  // start
  confirm.start();

  loadState.setLoaded(moduleName);
};

const startMethod = function () {
  const moduleName = "method";
  loadState.checkLoaded(moduleName);

  // start
  method.start();

  loadState.setLoaded(moduleName);
};

export default { start, startConfirm, startMethod };
