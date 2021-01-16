'use strict';

// console.log('hello world');

// //linter test - Passed - I do not have red lines underneath banana
// var banana = 42;

var userName = prompt('Welcome to my About Me Page! Which includes a quick guessing game. Before we begin though, what is your name?');
// alert(`Hello ${userName}, glad to meet you - You will have 5 (yes or no) guesses to figure out where I live`);
// // // write 5 questions - yes or no - y or n (not case sensitive)

// var answerOne = prompt('Do you think I live in Washington?').toLowerCase();
// if (answerOne === 'yes' || answerOne === 'y') {
//   // console.log('you are correct!')
//   alert('you are correct!');
// } else {
//   alert('close, but not quite.');
// }

// var answerTwo = prompt('Do you think I live on the East side of the mountains?').toLowerCase();
// if (answerTwo === 'no' || answerTwo === 'n') {
//   //console.log('You are on a roll!');
//   alert('Another correct guess!');
// } else if (answerTwo === 'yes' || answerTwo === 'y') {
//   alert('Try Again!');
// } else {
//   alert('that\'s not even relevant');
// }

// var answerThree = prompt('What about the Western side of Lake Washington?').toLowerCase();
// if (answerThree === 'yes' || answerThree === 'y') {
//   //console.log('You are on a roll!');
//   alert('Another correct guess!');
// } else if (answerThree === 'no' || answerThree === 'n') {
//   alert('Try Again!');
// } else {
//   alert('that\'s not even relevant');
// }

// var answerFour = prompt('Maybe you think I live in the woods?').toLowerCase();
// if (answerFour === 'no' || answerFour === 'n') {
//   //console.log('correct, I like the city!');
//   alert('correct, I like the city!');
// } else if (answerFour === 'yes' || answerFour === 'y') {
//   alert('Not a chance!');
// } else {
//   alert('You\'ve gotten so far, to be that wrong!');
// }

// var answerFive = prompt('Is it possible I live in Seattle?').toLowerCase();
// if (answerFive === 'yes' || answerFive === 'y') {
//   //console.log('You are on a roll!');
//   alert(userName + '! Great guesses, you are correct!');
// } else if (answerFive === 'no' || answerFive === 'n') {
//   alert('Try Again!');
// } else {
//   alert('that\'s not even relevant');
// }

// // 6th question - requiring numeric input - must indicate 'high'/ 'low'
// // 4 opportunities for a correct answer - after that correct answer will be given


var numberGuesses = 4;
var correctNumber = 24;
// var userAnswer = prompt('Can you guess how long I have lived in Washington?');
// console.log(userAnswer);

for (var i = 0; i < numberGuesses; i++) {
  var userAnswer = parseInt(prompt('Guess how long I have lived in WA?'));
  if (userAnswer === correctNumber) {
    alert(`Great job ${userName}, you are correct!`);
    break;
  }
  if (userAnswer < correctNumber && i !== 3) {
    alert('too low, try again');
  } else if (userAnswer > correctNumber && i !== 3) {
    alert('too high');
  } else {
    alert(`you are wrong, correct answer is ${correctNumber} years total`)
  }
  console.log(i);
}




// // 7th question with multiple option in an array
// // 6 attempts to name them all -once guessed all possible options displayed
// // final score ?/7






// alert(`Thanks for playing, ${userName}! Hope you enjoyed your time, and I look forward to talking more soon!`);