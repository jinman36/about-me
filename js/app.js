'use strict';

// console.log('hello world');

// //linter test - Passed - I do not have red lines underneth banana
// // var banana = 42;

var userName = prompt('Welcome to my About Me Page! Which includes a quick guessing game!, but first, what is your name?');
alert(`Hello ${userName}, glad to meet you - You will have 5 (yes or no) guesses to figure out where I live`);
// // write 5 questions - yes or no - y or n (not case sensitive)

var answerOne = prompt('Do you think I live in Washington?').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  // console.log('you are correct!')
  alert('you are correct!');
} else {
  alert('close, but not quite.');
}

var answerTwo = prompt('Do you think I live on the East side of the Mountains?').toLowerCase();
if (answerTwo === 'no' || answerTwo === 'n') {
  //console.log('You are on a roll!');
  alert('Another correct guess!');
} else if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('Try Again!');
} else {
  alert('that\'s not even relevant');
}

var answerThree = prompt('What about the Western side of Lake Washington?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  //console.log('You are on a roll!');
  alert('Another correct guess!');
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('Try Again!');
} else {
  alert('that\'s not even relevant');
}

var answerFour = prompt('Maybe you think I live in the woods?').toLowerCase();
if (answerFour === 'no' || answerFour === 'n') {
  //console.log('correct, I like the city!');
  alert('correct, I like the city!');
} else if (answerFour === 'yes' || answerFour === 'y') {
  alert('Not a chance!');
} else {
  alert('You\'ve gotten so far, to be that wrong!');
}

var answerFive = prompt('Is it possible I live in Seattle?').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y') {
  //console.log('You are on a roll!');
  alert(userName + '! Great guesses, you are correct!');
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('Try Again!');
} else {
  alert('that\'s not even relevant');
}

alert(`Thanks for playing, ${userName}! Hope you enjoyed your time, and I look forward to talking more soon!`);
