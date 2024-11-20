import confirm from "./confirm";
import method from "./method";

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
