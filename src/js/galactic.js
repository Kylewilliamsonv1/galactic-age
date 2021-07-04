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

}

// inputResults(){
//   let age = this.age;
//   let lifeExp = this.lifeExp;
//   let planetAge = [];
//   let planetExp = [];
//   let remYears = [];
//   let planetYearArray = this.planetCal();
//   planetYearArray.forEach(function(element){
//     planetAge.push(element * age);
//   });
//   planetYearArray.forEach(function(element){
//     planetExp.push(element * lifeExp);
//   });
//   for(let i =0; i <planetExp.length; i++) {
//     remYears.push(Math.abs(planetExp[i] - planetAge[i]));
//   }
// }





