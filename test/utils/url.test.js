import { expect, test, describe, beforeEach } from "vitest";
import url from "../../src/utils/url.js";

beforeEach(async () => {
  // mock: window.location.herf
  Object.defineProperty(window, "location", {
    value: {
      href: "https://example.com/path",
    },
  });
});

describe("#isCrossOrigin", () => {
  test("return true for an href with relative path", () => {
    const href = "./xxx";

    expect(url.isCrossOrigin(href)).toBe(false);
  });

  test("return true for an href with root relative path", () => {
    const href = "/path/xxx";

    expect(url.isCrossOrigin(href)).toBe(false);
  });

  test("return true for an href with different protocol", () => {
    const href = "http://example.com";

    expect(url.isCrossOrigin(href)).toBe(true);
  });

  test("return true for an href with different port", () => {
    const href = "https://example.com:9999";

    expect(url.isCrossOrigin(href)).toBe(true);
  });

  test("return true for an href with different hostname", () => {
    const href = "https://test.example.com";

    expect(url.isCrossOrigin(href)).toBe(true);
  });

  test("return false for an href with cross domain url", () => {
    const href = "https://example.org";

    expect(url.isCrossOrigin(href)).toBe(true);
  });
});
