import csrf from "./utils/csrf.js";
import url from "./utils/url.js";

const methodSelector = "a[data-method]";

const start = function () {
  document.addEventListener("click", function (event) {
    const { target } = event;

    const element =
      target instanceof HTMLElement && target.closest(methodSelector);
    if (!element) {
      return;
    }

    methodEvent(element, event);
  });
};

const methodEvent = function (target, event) {
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

  // Set csrf token/param
  const csrfToken = csrf.csrfToken();
  const csrfParam = csrf.csrfParam();
  if (csrfParam && csrfToken && !url.isCrossOrigin(href)) {
    formContent += `<input name='${csrfParam}' value='${csrfToken}' type='hidden' />`;
  }

  form.innerHTML = formContent;
  form.style.display = "none";

  document.body.appendChild(form);

  form.querySelector('[type="submit"]').click();

  event.preventDefault();
};

export default { start };
