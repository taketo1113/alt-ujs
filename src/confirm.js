document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(
    "a[data-confirm], button[data-confirm], input[type=submit][data-confirm]",
  );

  targets.forEach(function (target) {
    setConfirmEvent(target);
  });
});

const setConfirmEvent = function (target) {
  target.addEventListener("click", function (event) {
    const message = target.dataset.confirm;

    if (!message) {
      return true;
    }

    if (!window.confirm(message)) {
      event.preventDefault();
    }
  });
};
