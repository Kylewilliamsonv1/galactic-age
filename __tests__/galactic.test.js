import { TestScheduler } from 'jest-cli';
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
  test('it will calculate a persons age by different planet years and return an array of ages', ()=>{
    expect(person.ageCal()).toEqual([10,42,17,6,1]);
  });
  test('it will calculate a persons life expectancy by different planet years and return an array of life expectancies.', ()=>{
    expect(person.lifeExpCal()).toEqual([100,415,161,54,9]);
  });

  test('it will return an array of remaining years to live from different planets', ()=>{
    expect(person.personRemYears()).toEqual([90,373,144,48,8]);
  });
  test('it will tell the user if they have surpased their expected years to live and return how many years past the have lived past.', ()=>{
    expect(person.lifeCondition()).toEqual();
  });
  test('it will return a users age, life expectancy, and remaining years in an array.', ()=>{
    expect(person.checkStats()).toEqual([[10, 100, 90], [42, 415, 373], [17, 161, 144], [6, 54, 48], [1, 9, 8]]);
  })
});