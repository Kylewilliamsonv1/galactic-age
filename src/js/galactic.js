export default class Person {
  constructor(age, lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
  }
  planetCal(){
    let planetAge = [];
    let planetExp = [];
    let age = this.age;
    let lifeExp = this.lifeExp;
    let merYears = Math.ceil(365 * .24);
    let venYears = Math.ceil(365 * .62);
    let marsYears = Math.ceil(365 * 1.88);
    let jupYears = Math.ceil(365 * 11.86);
    let planetYearArray = [merYears,venYears,marsYears,jupYears];
    planetYearArray.forEach(function(element){
      planetAge.push(element * age);
    });
    planetYearArray.forEach(function(element){
      planetExp.push(element * lifeExp);
    });
    return {
      planetAge,
      planetExp,
    };
  }
  personRemYears() {
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

