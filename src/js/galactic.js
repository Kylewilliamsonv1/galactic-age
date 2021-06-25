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





}
