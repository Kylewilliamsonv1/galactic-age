export default class Person {
  constructor(age, lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
  }
  ageCal() {
    let person = this.age;
    let merYears = Math.ceil(365 * .24);
    let venYears = Math.ceil(365 * .62);
    let marsYears = Math.ceil(365 * 1.88);
    let jupYears = Math.ceil(365 * 11.86);
    let personMerAge = Math.ceil(person * 365 / merYears);
    let personVenAge = Math.ceil(person * 365 / venYears);
    let personMarsAge = Math.ceil(person * 365 / marsYears);
    let personJupAge = Math.ceil(person * 365 / jupYears);
    let planetAgeArray = [person, personMerAge, personVenAge, personMarsAge, personJupAge];
    return planetAgeArray;
  }
  lifeExpCal() {
    let lifeExp = this.lifeExp;
    let merYears = Math.ceil(365 * .24);
    let merLifeExp = Math.ceil(lifeExp * 365 / merYears);
    let venYears = Math.ceil(365 * .62);
    let venLifeExp = Math.ceil(lifeExp * 365 / venYears);
    let marsYears = Math.ceil(365 * 1.88);
    let marsLifeExp = Math.ceil(lifeExp * 365 / marsYears);
    let jupYears = Math.ceil(365 * 11.86);
    let jupLifeExp = Math.ceil(lifeExp * 365 / jupYears);
    let planetLExpArray = [lifeExp, merLifeExp, venLifeExp, marsLifeExp, jupLifeExp];
    return planetLExpArray;
  }
  personRemYears() {
    let personAge = this.ageCal();
    let lifeExp = this.lifeExpCal();
    let remYearsEarth = this.lifeExp - this.age;
    let remYearsMercury = lifeExp[1] - personAge[1];
    let remYearsVenus = lifeExp[2] - personAge[2];
    let remYearsMars = lifeExp[3] - personAge[3];
    let remYearsJupiter = lifeExp[4] - personAge[4];
    let planetRemYArray = [remYearsEarth, remYearsMercury, remYearsVenus, remYearsMars, remYearsJupiter];
    return planetRemYArray;
  }
  lifeCondition() {
    let personLCondtion = this.lifeExp - this.age;
    if (this.lifeExp < this.age) {
      return personLCondtion;
    }
  }
  checkStats() {
    let personAge = this.ageCal();
    let lifeExp = this.lifeExpCal();
    let personRY = this.personRemYears();
    let earthStats = [personAge[0],lifeExp[0],personRY[0]];
    let mercuryStats = [personAge[1],lifeExp[1],personRY[1]];
    let venusStats = [personAge[2],lifeExp[2],personRY[2]];
    let marsStats = [personAge[3],lifeExp[3],personRY[3]];
    let jupiterStats = [personAge[4],lifeExp[4],personRY[4]];
    let personGalacticStats = [earthStats,mercuryStats,venusStats,marsStats,jupiterStats];
    return personGalacticStats;
  }
}

