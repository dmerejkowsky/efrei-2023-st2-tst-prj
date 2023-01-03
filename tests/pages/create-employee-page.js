import { BasePage } from "./base-page";

export class CreateEmployeePage extends BasePage {
  submitButton;

  static CREATE_EMPLOYEE_FIELDS = {
    name: "#id_name",
    email: "#id_email",
    addressLine1: "#id_address_line1",
    addressLine2: "#id_address_line2",
    city: "#id_city",
    zipCode: "#id_zip_code",
    hiringDate: "#id_hiring_date",
    jobTitle: "#id_job_title",
  };
   
  constructor(page) {
    super(page, CreateEmployeePage.CREATE_EMPLOYEE_FIELDS);
    this.submitButton = page.locator("[type='submit']");
  }

  fillCreateEmployeeForm(model) {
    Object.keys(this.locators).forEach(async (locatorKey) => {
        await this.locators[locatorKey].type(model[locatorKey]);
    })
  }

  async submit() {
    await this.submitButton.click();
  }
}
