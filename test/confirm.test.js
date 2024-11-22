// @vitest-environment jsdom
import { expect, test, describe, beforeEach, afterEach, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { setClickEvents } from "../src/confirm.js";

var message;

beforeEach(async () => {
  message = "";
  window.confirm = vi.fn((msg) => {
    message = msg;
    return true;
  });
});

describe("Link(a tag)", () => {
  beforeEach(async () => {
    const link = document.createElement("a");
    link.id = "id-confirm";
    link.href = "#";
    link.textContent = "Link";
    link.setAttribute("data-confirm", "test message");
    document.body.appendChild(link);

    setClickEvents();
  });

  afterEach(async () => {
    const element = document.getElementById("id-confirm");
    document.body.removeChild(element);
  });

  test("display confirm dialog", async () => {
    const element = document.getElementById("id-confirm");

    const user = userEvent.setup();
    await user.click(element);

    expect(window.confirm).toBeCalled();
    expect(message).toBe("test message");
  });

  test("display confirm dialog with empty data-confirm", async () => {
    const element = document.getElementById("id-confirm");
    element.setAttribute("data-confirm", "");

    const user = userEvent.setup();
    await user.click(element);

    expect(window.confirm).not.toBeCalled();
    expect(message).toBe("");
  });

  test("display confirm dialog without data-confirm", async () => {
    const element = document.getElementById("id-confirm");
    element.removeAttribute("data-confirm");

    const user = userEvent.setup();
    await user.click(element);

    expect(window.confirm).not.toBeCalled();
    expect(message).toBe("");
  });
});

describe("Button(button tag)", () => {
  beforeEach(async () => {
    const button = document.createElement("button");
    button.id = "id-confirm";
    button.type = "button";
    button.textContent = "Button";
    button.setAttribute("data-confirm", "test message");
    document.body.appendChild(button);

    setClickEvents();
  });

  afterEach(async () => {
    const element = document.getElementById("id-confirm");
    document.body.removeChild(element);
  });

  test("display confirm dialog", async () => {
    const element = document.getElementById("id-confirm");

    const user = userEvent.setup();
    await user.click(element);

    expect(window.confirm).toBeCalled();
    expect(message).toBe("test message");
  });

  test("display confirm dialog with empty data-confirm", async () => {
    const element = document.getElementById("id-confirm");
    element.setAttribute("data-confirm", "");

    const user = userEvent.setup();
    await user.click(element);

    expect(window.confirm).not.toBeCalled();
    expect(message).toBe("");
  });

  test("display confirm dialog without data-confirm", async () => {
    const element = document.getElementById("id-confirm");
    element.removeAttribute("data-confirm");

    const user = userEvent.setup();
    await user.click(element);

    expect(window.confirm).not.toBeCalled();
    expect(message).toBe("");
  });
});

describe("Submit(input tag)", () => {
  beforeEach(async () => {
    const input = document.createElement("input");
    input.id = "id-confirm";
    input.type = "submit";
    input.textContent = "Submit";
    input.setAttribute("data-confirm", "test message");
    document.body.appendChild(input);

    setClickEvents();
  });

  afterEach(async () => {
    const element = document.getElementById("id-confirm");
    document.body.removeChild(element);
  });

  test("display confirm dialog", async () => {
    const element = document.getElementById("id-confirm");

    const user = userEvent.setup();
    await user.click(element);

    expect(window.confirm).toBeCalled();
    expect(message).toBe("test message");
  });

  test("display confirm dialog with empty data-confirm", async () => {
    const element = document.getElementById("id-confirm");
    element.setAttribute("data-confirm", "");

    const user = userEvent.setup();
    await user.click(element);

    expect(window.confirm).not.toBeCalled();
    expect(message).toBe("");
  });

  test("display confirm dialog without data-confirm", async () => {
    const element = document.getElementById("id-confirm");
    element.removeAttribute("data-confirm");

    const user = userEvent.setup();
    await user.click(element);

    expect(window.confirm).not.toBeCalled();
    expect(message).toBe("");
  });
});
