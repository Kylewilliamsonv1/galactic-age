import Person from './galactic.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('#galacticSubmit').click(function (){
  const age = $('#age').val();
  const lifeExp = $('#lifeExp').val();
  const newPerson = new Person(age, lifeExp);
  $("#output").html(newPerson.checkStats());
})