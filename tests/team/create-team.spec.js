// @ts-check
const { test, expect } = require("@playwright/test");
const { pages } = require("../page-helper");
const { Team } = require("./model/team");
const { fillCreateTeamForm } = require("./helper/create_team_helper");


test.describe("create team tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(pages.ADD_TEAM);
  });
  test("should not create team", async ({ page }) => {
    const team = new Team("test 3");
    fillCreateTeamForm(page, team)
  });

  test("should not create team when name is empty", async ({ page }) => {});
  
  test("should not create team with a name that already exist", async ({ page }) => {});
  
  test("should not create team with a name length greater than 100", async ({ page }) => {});
  
});
