'use strict';

console.log('hello world');

//linter test - Passed - I do not have red lines underneth banana
// var banana = 42;

var userName = prompt('hello what is your name?');
alert('Hello ' + userName + ' glad to meet you');
// write 5 questions - yes or no - y or n (not case sensitive)

var questionOne = prompt('Do you live in Washington?').toLowerCase();
if(questionOne === 'yes' || questionOne === 'y') {
  // console.log('you are correct!')
  alert('you are correct!')
} else{
  alert('close, but not quite.');
}

var questionTwo = prompt('Are you on the East side of the Mountains?').toLowerCase();
if(questionTwo === 'no' || questionTwo === 'n') {
  //console.log('You are on a roll!');
  alert('Another correct guess!');
} else if (questionTwo === 'yes' || questionTwo === 'y'){
  alert('Try Again!');
} else {
  alert('that\'s not even relevant');
}

var questionThree = prompt('Do you live on the Western side of Lake Washington?').toLowerCase();
if(questionThree === 'yes' || questionThree === 'y') {
  //console.log('You are on a roll!');
  alert('Another correct guess!');
} else if (questionThree === 'no' || questionThree === 'n'){
  alert('Try Again!');
} else {
  alert('that\'s not even relevant');
}

var questionFour = prompt('Do you live in the woods?').toLowerCase();
if(questionFour === 'no' || questionFour === 'n') {
  //console.log('correct, I like the city!');
  alert('correct, I like the city!');
} else if (questionFour === 'yes' || questionFour === 'y'){
  alert('Not a chance!');
} else {
  alert('You\'ve gotten so far, to be that wrong!');
}

var questionFive = prompt('Do you live in Seattle?').toLowerCase();
if(questionFive === 'yes' || questionFive === 'y') {
  //console.log('You are on a roll!');
  alert(userName + '! Great guesses, you are correct!');
} else if (questionFive === 'no' || questionFive === 'n'){
  alert('Try Again!');
} else {
  alert('that\'s not even relevant');
};

alert('Thanks for playing, ' + userName + '! Hope you enjoyed your time!');