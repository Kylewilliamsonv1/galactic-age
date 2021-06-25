export default class  Person {
  constructor(age) {
    this.age = age;
  }
  mercuryAge() {
    let merYears = Math.ceil(365 * .24)
    let person = [this.age];
    let personMerAge = Math.ceil(person * 365/merYears);
    return personMerAge;
  }
  venusAge() {
    let venYears = Math.ceil(365 * .62)
    let person = [this.age];
    let personVenAge = Math.ceil(person * 365/venYears);
    return personVenAge
  }
  marsAge() {
    let marsYears = Math.ceil(365 * 1.88)
    let person = [this.age];
    let personMarsAge = Math.ceil(person * 365/marsYears);
    return personMarsAge
  }
}
