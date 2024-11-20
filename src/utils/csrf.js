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

export default { csrfToken, csrfParam };
