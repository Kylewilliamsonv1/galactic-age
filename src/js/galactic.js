export default class  Person {
  constructor(age,lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
  }
  ageCal() {
    let person = this.age
    let merYears = Math.ceil(365 * .24)
    let venYears = Math.ceil(365 * .62)
    let marsYears = Math.ceil(365 * 1.88)
    let jupYears = Math.ceil(365 * 11.86) 
    let personMerAge = Math.ceil(person * 365/merYears);
    let personVenAge = Math.ceil(person * 365/venYears);
    let personMarsAge = Math.ceil(person * 365/marsYears);
    let personJupAge = Math.ceil(person * 365/jupYears);
    let planetAgeArray = [person, personMerAge, personVenAge, personMarsAge, personJupAge]
    return planetAgeArray
  }
  mercuryAge() {
    let merYears = Math.ceil(365 * .24)
    let person = this.age;
    let personMerAge = Math.ceil(person * 365/merYears);
    return personMerAge;
  }
  venusAge() {
    let venYears = Math.ceil(365 * .62)
    let person = this.age;
    let personVenAge = Math.ceil(person * 365/venYears);
    return personVenAge
  }
  marsAge() {
    let marsYears = Math.ceil(365 * 1.88)
    let person = this.age;
    let personMarsAge = Math.ceil(person * 365/marsYears);
    return personMarsAge
  }
  jupiterAge() {
    let jupYears = Math.ceil(365 * 11.86)
    let person = this.age;
    let personJupAge = Math.ceil(person * 365/jupYears);
    return personJupAge
  }
  lifeExpCal() {
    let lifeExp = this.lifeExp;
    let expYearsArray = this.ageCal()
    let merLifeExp = Math.ceil(lifeExp * 365/merYears);
    let venLifeExp = Math.ceil(lifeExp * 365/venYears);
    let marsLifeExp = Math.ceil(lifeExp * 365/marsYears);
    let jupLifeExp = Math.ceil(lifeExp * 365/jupYears);
    let planetLExpArray = [lifeExp,merLifeExp,venLifeExp,marsLifeExp,jupLifeExp]
    return planetLExpArray
  }
  mercuryExp() {
    let lifeExp = this.lifeExp;
    let merYears = Math.ceil(365 * .24)
    let merLifeExp = Math.ceil(lifeExp * 365/merYears);
    return merLifeExp
  }
  venusExp() {
    let lifeExp = this.lifeExp;
    let venYears = Math.ceil(365 * .62)
    let venLifeExp = Math.ceil(lifeExp * 365/venYears);
    return venLifeExp
  }
  marsExp() {
    let lifeExp = this.lifeExp;
    let marsYears = Math.ceil(365 * 1.88)
    let marsLifeExp = Math.ceil(lifeExp * 365/marsYears);
    return marsLifeExp
  }
  jupExp() {
    let lifeExp = this.lifeExp;
    let jupYears = Math.ceil(365 * 11.86)
    let jupLifeExp = Math.ceil(lifeExp * 365/jupYears);
    return jupLifeExp
  }
  personRemYearsEarth () {
    let remYearsEarth = this.lifeExp - this.age;
    return remYearsEarth
  }
  personRemYearsMercury () {
    let remYearsMercury = this.mercuryExp() - this.mercuryAge();
    return remYearsMercury
  }
  personRemYearsVenus() {
    let remYearsVenus = this.venusExp() - this.venusAge();
    return remYearsVenus
  }

}
