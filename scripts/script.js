let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setResponse() {
  var myResponse = prompt('Please enter your review.');
  localStorage.setItem('response', myResponse);
}

if(!localStorage.getItem('response')) {
  setResponse();
}

myButton.onclick = function() {
  setResponse();
}