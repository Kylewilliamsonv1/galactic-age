import Person from './../src/js/galactic.js';

describe('Person', () =>{
  let person;

  beforeEach(() => {
    person = new Person(10, 100);
  });

  test('it will take in a persons inputted age and life expectancy', () => {
    expect(person.age).toEqual(10);
    expect(person.lifeExp).toEqual(100);
  });
  test('it will return an array of remaining years to live from different planets', ()=>{
    expect(person.personRemYears()).toEqual([90,373,144,48,8]);
  });
  test('it will tell the user if they have surpased their expected years to live and return how many years past the have lived past.', ()=>{
    expect(person.lifeCondition()).toEqual();
  });
  test('it will return a users age, life expectancy, and remaining years in an array.', ()=>{
    expect(person.checkStats()).toEqual([[10, 100, 90], [42, 415, 373], [17, 161, 144], [6, 54, 48], [1, 9, 8]]);
  });
  test('it will return an array of ages and life expectancies by planet.', ()=>{
    expect(person.planetCal()).toEqual({"planetAge": [880, 2270, 6870, 43290], "planetExp": [8800, 22700, 68700, 432900]});
  });
});


