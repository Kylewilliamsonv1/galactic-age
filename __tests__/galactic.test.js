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
  })

  test('it will return a persons age in Mercury years.', () => {
    expect(person.mercuryAge()).toEqual(42)
  })

  test('it will return a persons age in Venus years', ()=> {
    expect(person.venusAge()).toEqual(17)
  })

  test('it will return a persons age in Mars years', ()=> {
    expect(person.marsAge()).toEqual(6)
  })

  test('it will return a persons age in Jupiter years', ()=> {
    expect(person.jupiterAge()).toEqual(1)
  })
  test('it will return a persons life expectancy in Mercury years.', () => {
    expect(person.mercuryExp()).toEqual(415)
  })
  test('it will return a persons life expectancy in Venus years.', () => {
    expect(person.venusExp()).toEqual(161)
  })
})