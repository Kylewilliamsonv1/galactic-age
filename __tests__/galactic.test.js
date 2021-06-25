import { TestScheduler } from 'jest-cli';
import Person from './../src/js/galactic.js';

describe('Person', () =>{
  let person;

  beforeEach(() => {
    person = new Person(10);
  });

  test('it will take in a persons age', () => {
    expect(person.age).toEqual(10);
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



})