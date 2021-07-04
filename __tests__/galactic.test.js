import Person from './../src/js/galactic.js';

describe('Person', () =>{
  let person;
  let personOld;

  beforeEach(() => {
    person = new Person(10, 100);
    personOld = new Person(100,50);
  });

  test('it will take in a persons inputted age and life expectancy', () => {
    expect(person.age).toEqual(10);
    expect(person.lifeExp).toEqual(100);
  });
  test('it will return an array of age equivelants by planet', ()=>{
    expect(person.planetCal()).toEqual([88, 227, 687, 4329]);
  });
  test('it will return an array of remaining years left by planet based on life expectancy', ()=>{
    expect(person.remYears()).toEqual({"ageArray": [42, 17, 6, 1], "remYears": [373, 144, 48, 8], "lifeExpArray": [415,161,54,9]});
  });
  test('it will check to see if the user has lived past their life expectancy, if so it will return the amount years past', ()=>{
    expect(personOld.lifeCond()).toEqual(50);
  });
});


