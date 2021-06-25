import Person from './galactic.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('#galacticSubmit').click(function (){
  const userAge = $('#age').val();
  const person = new Person(age);
})