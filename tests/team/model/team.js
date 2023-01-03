export class Team {
  name;
  members;

  constructor(name) {
    this.name = name;
    this.members = [];
  }

  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }

  get members() {
    return this.members;
  }

  addMember(employee) {
    this.members.push(employee);
  }

  removeMember(employeeId) {
    this.members.pop(employee);
  }
}
