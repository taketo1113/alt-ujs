const confirmSelector =
  "a[data-confirm], button[data-confirm], input[type=submit][data-confirm]";

const start = function () {
  document.addEventListener("click", function (event) {
    const { target } = event;

    const element =
      target instanceof HTMLElement && target.closest(confirmSelector);
    if (!element) {
      return;
    }

    confirmEvent(element, event);
  });
};

const confirmEvent = function (target, event) {
  const message = target.dataset.confirm;

  if (!message) {
    return true;
  }

  if (!window.confirm(message)) {
    // Select cancel in the confirm dialog
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
};

export default { start };
