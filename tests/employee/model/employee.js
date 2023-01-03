export class Employee {
  _name;
  _email;
  _addressLine1;
  _addressLine2;
  _city;
  _zipCode;
  _hiringDate;
  _jobTitle;

  constructor(
    name,
    email,
    addressLine1,
    addressLine2,
    city,
    zipCode,
    hiringDate,
    jobTitle
  ) {
    this._name = name;
    this._email = email;
    this._addressLine1 = addressLine1;
    this._addressLine2 = addressLine2;
    this._city = city;
    this._zipCode = zipCode;
    this._hiringDate = hiringDate;
    this._jobTitle = jobTitle;
  }

  get addressLine1() {
    return this._addressLine1;
  }
  set addressLine1(value) {
    this._addressLine1 = value;
  }

  get addressLine2() {
    return this._addressLine2;
  }
  set addressLine2(value) {
    this._addressLine2 = value;
  }
  get city() {
    return this._city;
  }
  set city(value) {
    this._city = value;
  }
  get jobTitle() {
    return this._jobTitle;
  }
  set jobTitle(value) {
    this._jobTitle = value;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  get email() {
    return this._email;
  }
  set email(value) {
    this._email = value;
  }

  get hiringDate() {
    return this._hiringDate;
  }
  set hiringDate(value) {
    this._hiringDate = value;
  }
  get zipCode() {
    return this._zipCode;
  }
  set zipCode(value) {
    this._zipCode = value;
  }
}
