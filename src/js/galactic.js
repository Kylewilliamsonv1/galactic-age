export default class Person {
  constructor(age, lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
  }



  lifeCondition() {
    let personLCondtion = this.lifeExp - this.age;
    if (this.lifeExp < this.age) {
      return personLCondtion;
    }
  }
}

