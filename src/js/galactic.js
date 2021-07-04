export default class Person {
  constructor(age, lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
  }
  planetCal(){
    let merYears = Math.ceil(365 * .24);
    let venYears = Math.ceil(365 * .62);
    let marsYears = Math.ceil(365 * 1.88);
    let jupYears = Math.ceil(365 * 11.86);
    let planetYearArray = [merYears,venYears,marsYears,jupYears];
    return planetYearArray;
  }
  remYears(){
    let age = this.age;
    let lifeExp = this.lifeExp;
    let planetYearArray = this.planetCal();
    let lifeExpArray = [];
    let ageArray = [];
    let remYears = [];
    planetYearArray.forEach(function(element) {
      lifeExpArray.push(lifeExp * 365 / element); 
    });
    planetYearArray.forEach(function(element) {
      ageArray.push(Math.ceil(age * 365 / element)); 
    });
    for(let i = 0; i < lifeExpArray.length; i++) {
      remYears.push(Math.ceil(lifeExpArray[i]-ageArray[i]));
    }
    return {
      remYears,
      ageArray,
    };
  }
}





