const { test, expect } = require("@playwright/test");
const { pages } = require("../page-helper");

test.describe("delete team tests", () => {
  test.beforeEach(async ({ page }) => {
    //Create a team before launching the tests ?

    await page.goto("https://d.hr.dmerej.info/team/delete/7");
  });

  //Page should display the right team name on the delete page (?)
  test("should display correct informations", async ({ page }) => {});

  test("should delete the right team from db", async ({ page }) => {});
});
