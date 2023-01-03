export const FIELDS = {
  name: "#id_name",
  email: "#id_email",
  addressLine1: "#id_address_line1",
  addressLine2: "#id_address_line2",
  city: "#id_city",
  zipCode: "#id_zip_code",
  hiringDate: "#id_hiring_date",
  jobTitle: "#id_job_title",
};

export const fillCreateEmployeeForm = (page, model) => {
  const keys = Object.keys(FIELDS);
  keys.forEach((key) => {
    page.type(FIELDS[key], model[key]);
  });
};
