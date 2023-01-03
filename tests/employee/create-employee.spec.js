// @ts-check
const { test, expect } = require("@playwright/test");
const { pages } = require("../page-helper");
const { Employee } = require("./model/employee");
const {CreateEmployeePage} = require('../pages/create-employee-page')

test.describe("create employee tests", () => {
  let createEmployeePage;
  test.beforeEach(async ({ page }) => {
    await page.goto(pages.ADD_EMPLOYEE);
    createEmployeePage = new CreateEmployeePage(page)
  });

  test("should create employee", async ({ page }) => {
    //Given
    const employee = new Employee("toto","toto@gmail.com","1 rue de paris","","Paris","75020",new Date("2023-01-01"));
    //When
    createEmployeePage.fillCreateEmployeeForm(employee)
    createEmployeePage.submit()
    createEmployeePage.wait(20000);
    console.log(page.url(),'page.url()')
    //Then
    await expect(page.url().includes(pages.EMPLOYEE)).toBeTruthy();
  });

  // Create a parametrized test that fill all the input except one
  test.skip("should not create employee", async ({ page }) => {});

  test.skip("should not create employee when negative zip code", async ({
    page,
  }) => {});

  test.skip("should not create employee when zip code length greater than X", async ({
    page,
  }) => {});

  test.skip("should not create employee when hire date not valid", async ({
    page,
  }) => {});

  test.skip("should have 3 input for the address", async ({ page }) => {});

  test.skip("should not create employee with invalid address", async ({
    page,
  }) => {});

  test.skip("should not create 2 employee with same email", async ({ page }) => {});

  test.skip("should have 2 input for the name (firstname and lastname)", async ({
    page,
  }) => {});

  test.skip("should not create 2 employee with same city but different zip code", async ({
    page,
  }) => {});
});
