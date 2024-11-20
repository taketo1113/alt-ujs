document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll("a[data-method]");

  targets.forEach(function (target) {
    setMethodEvent(target);
  });
});

const setMethodEvent = function (target) {
  target.addEventListener("click", function (event) {
    const method = target.dataset.method;

    if (!method) {
      return true;
    }

    const href = target.href;

    // Submit the form as an HTML form using the specified method
    const form = document.createElement("form");
    form.action = href;
    form.method = "post";

    // For a Rails form, set the input[name="_method"] attribute
    let formContent = `<input name='_method' value='${method}' type='hidden' />`;
    formContent += '<input type="submit" />';

    form.innerHTML = formContent;
    form.style.display = "none";

    document.body.appendChild(form);
    form.querySelector('[type="submit"]').click();

    event.preventDefault();
  });
};
