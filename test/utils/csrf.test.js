// @vitest-environment jsdom
import { expect, test, describe, beforeEach, afterEach } from "vitest";
import csrf from "../../src/utils/csrf.js";

let csrftoken;
let csrfparam;

beforeEach(async () => {
  csrftoken = document.createElement("meta");
  csrftoken.setAttribute("name", "csrf-token");
  csrftoken.setAttribute("content", "xxxxxxxx");

  csrfparam = document.createElement("meta");
  csrfparam.setAttribute("name", "csrf-param");
  csrfparam.setAttribute("content", "authenticity_token");
});

afterEach(async () => {
  const token = document.querySelector("meta[name=csrf-token]");
  if (token) {
    document.head.removeChild(csrftoken);
  }
  const param = document.querySelector("meta[name=csrf-param]");
  if (param) {
    document.head.removeChild(csrfparam);
  }
});

describe("#csrfToken", () => {
  test("get csrf token with mata of csrf-token", () => {
    document.head.appendChild(csrftoken);

    const csrfToken = csrf.csrfToken();
    expect(csrfToken).toEqual("xxxxxxxx");
  });

  test("not get csrf token without mata of csrf-token", () => {
    const csrfToken = csrf.csrfToken();
    expect(csrfToken).toBeUndefined();
  });
});

describe("#csrfParam", () => {
  test("get csrf param with mata of csrf-param", () => {
    document.head.appendChild(csrfparam);

    const csrfParam = csrf.csrfParam();
    expect(csrfParam).toEqual("authenticity_token");
  });

  test("not get csrf param without mata of csrf-param", () => {
    const csrfParam = csrf.csrfParam();
    expect(csrfParam).toBeUndefined();
  });
});
