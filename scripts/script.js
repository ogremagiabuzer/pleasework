// few variables
let myButton = document.querySelector('button');

// function for storing the anwser of the prompt in local storage

function setResponse() {
  var myResponse = prompt('Please enter your review.');
  localStorage.setItem('response', myResponse);
}

// function for calling a setResponse function in order to ask the user for the input if there is no input yet.

if(!localStorage.getItem('response')) {
  setResponse();
}

// function for changing the review by clicking the button.

myButton.onclick = function() {
  setResponse();
}
