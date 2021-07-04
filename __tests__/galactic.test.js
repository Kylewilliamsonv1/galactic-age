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
  test('it will return an array of year equivelants by planet', ()=>{
    expect(person.planetCal()).toEqua();
  });
  test('it will tell the user if they have surpased their expected years to live and return how many years past the have lived past.', ()=>{
    expect(person.lifeCondition()).toEqual();
  });

});


