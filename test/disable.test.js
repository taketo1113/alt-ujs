import { expect, test, beforeEach, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import disable, { setDisableFormEvents } from "../src/disable.js";

let calledSubmit = false;

beforeEach(async () => {
  const form = document.createElement("form");
  form.action = "#";
  form.method = "post";
  let formContent = "";
  formContent = '<input id="id-input" type="text" value="test" />';
  formContent += '<input id="id-submit" type="submit" />';
  form.innerHTML = formContent;
  document.body.appendChild(form);

  setDisableFormEvents();

  // mock: form submit event to bypass "Error: Not implemented: HTMLFormElement.prototype.requestSubmit"
  form.addEventListener("submit", function () {
    calledSubmit = true;
    event.preventDefault();
  });
});

afterEach(async () => {
  const form = document.querySelector("form");
  if (form) {
    document.body.removeChild(form);
  }

  calledSubmit = false;
});

test("disable the form submit button on submit click", async () => {
  const element = document.getElementById("id-submit");

  const user = userEvent.setup();
  await user.click(element);

  // assert
  expect(calledSubmit).toBe(true);

  const elementSubmit = document.getElementById("id-submit");
  expect(elementSubmit.disabled).toBe(true);
});

test("disable the form submit button when entering input element", async () => {
  const element = document.getElementById("id-input");

  const user = userEvent.setup();
  await user.click(element);
  await user.type(element, "{enter}");

  // assert
  expect(calledSubmit).toBe(true);

  const elementSubmit = document.getElementById("id-submit");
  expect(elementSubmit.disabled).toBe(true);
});

test("reset disable event", async () => {
  // prepare
  const element = document.getElementById("id-submit");
  const user = userEvent.setup();
  await user.click(element);
  const elementSubmit = document.getElementById("id-submit");
  expect(elementSubmit.disabled).toBe(true);

  disable.resetDisableEvent();

  // assert
  expect(elementSubmit.disabled).toBe(false);
});
