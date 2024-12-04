import { expect, test, describe, afterEach } from "vitest";
import AltUjs from "../src/index.js";

afterEach(async () => {
  window.__ALT_UJS__ = undefined;
});

describe("#start", () => {
  test("export start", () => {
    expect(AltUjs.start).not.toBeNull();
  });

  test("raise an error when start twice", () => {
    AltUjs.start();

    expect(() => AltUjs.start()).toThrowError(
      "alt-ujs: confirm module has already been loaded.",
    );
  });
});

describe("#startConfirm", () => {
  test("export startConfirm", () => {
    expect(AltUjs.startConfirm).not.toBeNull();
  });

  test("raise an error when start twice", () => {
    AltUjs.startConfirm();

    expect(() => AltUjs.startConfirm()).toThrowError(
      "alt-ujs: confirm module has already been loaded.",
    );
  });
});

describe("#startDisable", () => {
  test("export startDisable", () => {
    expect(AltUjs.startDisable).not.toBeNull();
  });

  test("raise an error when start twice", () => {
    AltUjs.startDisable();

    expect(() => AltUjs.startDisable()).toThrowError(
      "alt-ujs: disable module has already been loaded.",
    );
  });
});

describe("#startMethod", () => {
  test("export startMethod", () => {
    expect(AltUjs.startMethod).not.toBeNull();
  });

  test("raise an error when start twice", () => {
    AltUjs.startMethod();

    expect(() => AltUjs.startMethod()).toThrowError(
      "alt-ujs: method module has already been loaded.",
    );
  });
});
