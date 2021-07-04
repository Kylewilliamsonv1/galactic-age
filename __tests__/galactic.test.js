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
  test('it will return an array of ages by planet', ()=>{
    expect(person.planetCal()).toEqual([88, 227, 687, 4329]);
  });
  test('it will return an array of remaining years left by planet based on life expectancy', ()=>{
    expect(person.remYears()).toEqual();
  });
});


