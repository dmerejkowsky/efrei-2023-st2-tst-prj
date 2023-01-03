const { test, expect } = require("@playwright/test");
const { pages } = require("../page-helper");

test.describe("employee informations tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(pages.EMPLOYEE);
  });

  test("should retrieve name and email", async ({ page }) => {
    
  });
});
