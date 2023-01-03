// @ts-check
const { test, expect } = require("@playwright/test");
const { pages } = require("../page-helper");

test.describe("team list tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(pages.TEAM);
  });
});

dfdffr  test("should return one team object if the array length is equal to 1", async ({ page }) => {});ssuperior
  test("should return team objects if the array length is superior to 1", async ({ page }) => {});directo Add New Member to existing team
  
  test("should redirect to Team Members", async ({ page }) => {});