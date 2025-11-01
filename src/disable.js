const disableSelector = "form";

const start = function () {
  document.addEventListener("submit", function () {
    const { target } = event;

    const element =
      target instanceof HTMLElement && target.closest(disableSelector);
    if (!element) {
      return;
    }

    disableFormEvent(element);
  });

  // For browser back: enable a disabled form
  document.addEventListener("pageshow", function (event) {
    if (!event.persisted) {
      return;
    }

    resetDisableEvent();
  });
};

const disableFormEvent = function (target) {
  const element = target.querySelector('input[type="submit"]');

  if (element) {
    element.disabled = true;
    element["_alt_ujs:disabled"] = true;
  }
};

const resetDisableEvent = function () {
  const targets = document.querySelectorAll("form");

  targets.forEach(function (target) {
    const element = target.querySelector('input[type="submit"]');

    if (element["_alt_ujs:disabled"]) {
      element.disabled = false;
      element["_alt_ujs:disabled"] = false;
    }
  });
};

export default { start, resetDisableEvent };
