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

  test('it will return a persons age in Mercury years.', () => {
    expect(person.mercuryAge()).toEqual(42);
  });

  test('it will return a persons age in Venus years', ()=> {
    expect(person.venusAge()).toEqual(17);
  });

  test('it will return a persons age in Mars years', ()=> {
    expect(person.marsAge()).toEqual(6);
  });

  test('it will return a persons age in Jupiter years', ()=> {
    expect(person.jupiterAge()).toEqual(1);
  });
  test('it will return a persons life expectancy in Mercury years.', () => {
    expect(person.mercuryExp()).toEqual(415);
  });
  test('it will return a persons life expectancy in Venus years.', () => {
    expect(person.venusExp()).toEqual(161);
  });
  test('it will return a persons life expectancy in Mars years.', () => {
    expect(person.marsExp()).toEqual(54);
  });
  test('it will return a persons life expectancy in Jupiter years.', () => {
    expect(person.jupExp()).toEqual(9);
  });
  test('it will tell the user how many years they should expect to live in Earth years', ()=>{
    expect(person.personRemYearsEarth()).toEqual(90);
  });
  test('it will tell the user how many years they should expect to live in Mercury years', ()=>{
    expect(person.personRemYearsMercury()).toEqual(373);
  });
  test('it will tell the user how many years they should expect to live in Venus years', ()=>{
    expect(person.personRemYearsVenus()).toEqual(144);
  });
  // test('it will calculate a persons age by planet years and return an array of ages', ()=>{
  //   expect(person.ageCal()).toEqual([10,42,17,6,1])
  // })
});