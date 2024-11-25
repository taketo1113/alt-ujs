import { expect, test, describe, afterEach } from "vitest";
import loadState from "../../src/utils/loadState.js";

const moduleName = "test_module";

afterEach(async () => {
  window.__ALT_UJS__ = undefined;
});

describe("#setLoaded", () => {
  test("set the loaded state for a single module", () => {
    loadState.setLoaded(moduleName);

    expect(window.__ALT_UJS__.loaded_test_module).toBe(true);
  });

  test("set the loaded state for a multiple module", () => {
    loadState.setLoaded(moduleName);
    loadState.setLoaded("test2");

    expect(window.__ALT_UJS__.loaded_test_module).toBe(true);
    expect(window.__ALT_UJS__.loaded_test2).toBe(true);
  });

  test("return undefined when no loaded state is set", () => {
    expect(window.__ALT_UJS__).toBeUndefined();
  });
});

describe("#checkLoaded", () => {
  test("raise an error when the module has already been loaded", () => {
    loadState.setLoaded(moduleName);

    expect(() => loadState.checkLoaded(moduleName)).toThrowError(
      "alt-ujs: test_module module has already been loaded.",
    );
  });

  test("return true for a different module's loaded state", () => {
    loadState.setLoaded("test2");

    expect(loadState.checkLoaded(moduleName)).toBe(true);
  });

  test("return true when no loaded state is set for the module", () => {
    expect(loadState.checkLoaded(moduleName)).toBe(true);
  });

  // for rails-ujs
  test("raise an error when the rails-ujs is loaded", () => {
    window._rails_loaded = true;

    expect(() => loadState.checkLoaded(moduleName)).toThrowError(
      "If you load both rails-ujs and alt-ujs, use alt-ujs only.",
    );

    window._rails_loaded = undefined;
  });
});
