import confirm from "./confirm.js";
import disable from "./disable.js";
import method from "./method.js";
import loadState from "./utils/loadState.js";

const start = function () {
  startConfirm();
  startDisable();
  startMethod();
};

const startConfirm = function () {
  const moduleName = "confirm";
  loadState.checkLoaded(moduleName);

  // start
  confirm.start();

  loadState.setLoaded(moduleName);
};

const startDisable = function () {
  const moduleName = "disable";
  loadState.checkLoaded(moduleName);

  // start
  disable.start();

  loadState.setLoaded(moduleName);
};

const startMethod = function () {
  const moduleName = "method";
  loadState.checkLoaded(moduleName);

  // start
  method.start();

  loadState.setLoaded(moduleName);
};

export default { start, startConfirm, startDisable, startMethod };
