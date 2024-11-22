import { expect, test } from "vitest";
import AltUjs from "../src/index.js";

test("export start", async () => {
  expect(AltUjs.start).not.toBeNull();
});

test("export startConfirm", async () => {
  expect(AltUjs.startConfirm).not.toBeNull();
});

test("export startMethod", async () => {
  expect(AltUjs.startMethod).not.toBeNull();
});
