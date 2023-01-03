// @ts-check
const { test, expect } = require("@playwright/test");
const { pages } = require("../page-helper");
const { fillCreateEmployeeForm } = require("./helper/create-employee-helper");
const { Employee } = require("./model/employee");

test.describe("create employee tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(pages.ADD_EMPLOYEE);
  });

  test("should create employee", async ({ page }) => {
    //Given
    const employee = new Employee("toto","toto@gmail.com","1 rue de paris","","Paris","75020",new Date("2023-01-01"));
    //When
    fillCreateEmployeeForm(page,employee);
    page.click("[type='submit']")
    //Then
    (await expect(page.url())).toContainText(pages.EMPLOYEE);
  });

  // Create a parametrized test that fill all the input except one
  test("should not create employee", async ({ page }) => {});

  test("should not create employee when negative zip code", async ({
    page,
  }) => {});

  test("should not create employee when zip code length greater than X", async ({
    page,
  }) => {});

  test("should not create employee when hire date not valid", async ({
    page,
  }) => {});

  test("should have 3 input for the address", async ({ page }) => {});

  test("should not create employee with invalid address", async ({
    page,
  }) => {});

  test("should not create 2 employee with same email", async ({ page }) => {});

  test("should have 2 input for the name (firstname and lastname)", async ({
    page,
  }) => {});

  test("should not create 2 employee with same city but different zip code", async ({
    page,
  }) => {});
});
