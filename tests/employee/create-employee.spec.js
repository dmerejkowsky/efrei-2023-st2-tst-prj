// @ts-check
const { test, expect } = require("@playwright/test");
const { pages } = require("../page-helper");

test.describe("create employee tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(pages.ADD_EMPLOYEE);
  });

  test("All input should be filled", async ({ page }) => {});
});
