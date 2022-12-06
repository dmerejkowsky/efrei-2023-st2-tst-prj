// @ts-check
const { test, expect } = require("@playwright/test");
const { pages } = require("../page-helper");

test.describe("create team tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(pages.ADD_TEAM);
  });
});
