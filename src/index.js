import confirm from "./confirm.js";
import method from "./method.js";

const start = function () {
  startConfirm();
  startMethod();
};

const startConfirm = function () {
  confirm.start();
};

const startMethod = function () {
  method.start();
};

export default { start, startConfirm, startMethod };
