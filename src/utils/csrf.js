const csrfToken = function () {
  const token = document.querySelector("meta[name=csrf-token]");

  if (token) {
    return token.content;
  }
};

const csrfParam = function () {
  const param = document.querySelector("meta[name=csrf-param]");

  if (param) {
    return param.content;
  }
};

const refreshCSRFTokens = function () {
  const token = csrfToken();
  const param = csrfParam();

  if (token && param) {
    return document
      .querySelectorAll('form input[name="' + param + '"]')
      .forEach(function (input) {
        input.value = token;
      });
  }
};

export default { csrfToken, csrfParam, refreshCSRFTokens };
