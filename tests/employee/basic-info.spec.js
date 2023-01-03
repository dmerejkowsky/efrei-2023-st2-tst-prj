// @ts-check
const { test, expect } = require("@playwright/test");
const { pages } = require("../page-helper");

test.describe("Basic informations edition tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://d.hr.dmerej.info/employee/14");
  });

  // Cleanup
  test.afterEach(async ({ page }) => {
    // Supprimer tous les employees
    await page.goto("https://d.hr.dmerej.info/employees");

    // const employeeNodes = await page.$$eval("tbody tr", (trNode) => trNode);
    // employeeNodes.forEach((employeeNode) => {
    //     const deleteLink = employeeNode.querySelector('td:last-child a');
    //     const href = deleteLink?.getAttribute('href');
    //     const employeeId = href?.replace('/employee/delete/', '');
    //     console.log('employeeID', employeeId);
    // })

    const employeeDeleteLinkLocators = page.locator('tbody tr td:last-child');
    for (const employeeDeleteLinkLocator of await employeeDeleteLinkLocators.elementHandles()) {
        await employeeDeleteLinkLocator.click();

        // On est sur la page conformation de suppression
        expect(page).toHaveTitle('Delete Employee');
    } 



  });

  test("should display correct informations", async ({ page }) => {});

  test("should verify email type", async ({ page }) => {});

  test("Server should receives correct body", async ({ page }) => {});

  test("body field cannot be empty or whitespaced", async ({ page }) => {});

  test("Cannot inject XSS", async ({ page }) => {});

  test("Cannot inject SQL", async ({ page }) => {});

  test("Should update only name and email", async ({ page }) => {});

  test("Should verify antiforgery token", async ({ page }) => {});
});
