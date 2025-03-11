import { expect, test, describe, beforeEach, afterEach, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import method from "../src/method.js";

let spySubmitClick;

beforeEach(async () => {
  const link = document.createElement("a");
  link.id = "id-method";
  link.href = "#";
  link.textContent = "Link";
  link.setAttribute("data-method", "post");
  document.body.appendChild(link);

  method.start();

  spySubmitClick = vi
    .spyOn(HTMLInputElement.prototype, "click")
    .mockImplementation(() => {});
});

afterEach(async () => {
  const element = document.getElementById("id-method");
  document.body.removeChild(element);

  const form = document.querySelector("form");
  if (form) {
    document.body.removeChild(form);
  }

  vi.restoreAllMocks();
});

test("create a form to submit the selected method", async () => {
  const element = document.getElementById("id-method");

  const user = userEvent.setup();
  await user.click(element);

  // assert
  expect(spySubmitClick).toBeCalled();

  const form = document.querySelector("form");
  expect(form.action).toBe("http://localhost:3000/#");
  expect(form.method).toBe("post");

  const inputMethod = form.querySelector("input[name='_method']");
  expect(inputMethod.type).toBe("hidden");
  expect(inputMethod.value).toBe("post");

  const inputSubmit = form.querySelector("input[type='submit']");
  expect(inputSubmit).not.toBeNull();
});

test("create a form to submit the delete method", async () => {
  const element = document.getElementById("id-method");
  element.setAttribute("data-method", "delete");

  const user = userEvent.setup();
  await user.click(element);

  // assert
  expect(spySubmitClick).toBeCalled();

  const form = document.querySelector("form");
  expect(form.action).toBe("http://localhost:3000/#");
  expect(form.method).toBe("post"); // form.method is fixed to post

  const inputMethod = form.querySelector("input[name='_method']");
  expect(inputMethod.type).toBe("hidden");
  expect(inputMethod.value).toBe("delete");

  const inputSubmit = form.querySelector("input[type='submit']");
  expect(inputSubmit).not.toBeNull();
});

test("not create a form with empty data-method", async () => {
  const element = document.getElementById("id-method");
  element.removeAttribute("data-method");

  const user = userEvent.setup();
  await user.click(element);

  // assert
  expect(spySubmitClick).not.toBeCalled();

  const form = document.querySelector("form");
  expect(form).toBeNull();
});

test("not create a form without data-method", async () => {
  const element = document.getElementById("id-method");
  element.removeAttribute("data-method");

  const user = userEvent.setup();
  await user.click(element);

  // assert
  expect(spySubmitClick).not.toBeCalled();

  const form = document.querySelector("form");
  expect(form).toBeNull();
});

describe("with CSRF Token", () => {
  beforeEach(async () => {
    // setup: heder of csrf
    const csrftoken = document.createElement("meta");
    csrftoken.setAttribute("name", "csrf-token");
    csrftoken.setAttribute("content", "xxxxxxxx");
    document.head.appendChild(csrftoken);

    const csrfparam = document.createElement("meta");
    csrfparam.setAttribute("name", "csrf-param");
    csrfparam.setAttribute("content", "authenticity_token");
    document.head.appendChild(csrfparam);
  });

  afterEach(async () => {
    const csrftoken = document.querySelector("meta[name=csrf-token]");
    document.head.removeChild(csrftoken);
    const csrfparam = document.querySelector("meta[name=csrf-param]");
    document.head.removeChild(csrfparam);
  });

  test("create a form to submit the selected method", async () => {
    const element = document.getElementById("id-method");

    const user = userEvent.setup();
    await user.click(element);

    // assert
    expect(spySubmitClick).toBeCalled();

    const form = document.querySelector("form");
    expect(form.action).toBe("http://localhost:3000/#");
    expect(form.method).toBe("post");

    const inputMethod = form.querySelector("input[name='_method']");
    expect(inputMethod.type).toBe("hidden");
    expect(inputMethod.value).toBe("post");

    const inputSubmit = form.querySelector("input[type='submit']");
    expect(inputSubmit).not.toBeNull();

    // csrf
    const inputCsrf = form.querySelector("input[name='authenticity_token']");
    expect(inputCsrf.type).toBe("hidden");
    expect(inputCsrf.value).toBe("xxxxxxxx");
  });
});
