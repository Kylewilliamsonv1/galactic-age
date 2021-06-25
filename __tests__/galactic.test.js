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





})