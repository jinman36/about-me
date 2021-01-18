'use strict';

// console.log('hello world');

// //linter test - Passed - I do not have red lines underneath banana
// var banana = 42;

var correctAnswersTotal = 0;
var favoriteColors = ['blue', ' black', ' green'];
var guessCount = 0;
var totalGuesses = 6;
var guessCorrect = false;
var numberGuesses = 4;
var randomNumber = Math.floor(Math.random() * 10) + 1;

var userName = prompt('Welcome to my About Me Page! Before we begin with the games though, what\'s your name?');
alert(`Hello ${userName}, glad to meet you - I have 3 games that include 7 questions about different things I like. Hope you enjoy, good luck!`);
// write 5 questions - yes or no - y or n (not case sensitive)

// function questionOne() {
var answerOne = prompt('Do you think I live in Washington?').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  correctAnswersTotal++;
  // console.log('you are correct!')
  alert('You are correct!');
} else {
  alert('Close, but not quite.');
}
// }

// function questionTwo() {
var answerTwo = prompt('Do you think I live on the East side of the mountains?').toLowerCase();
if (answerTwo === 'no' || answerTwo === 'n') {
  correctAnswersTotal++;
  //console.log('You are on a roll!');
  alert('Another correct guess!');
} else if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('Try Again!');
} else {
  alert('That isn\'t even relevant');
}
// }

// function questionThree() {
var answerThree = prompt('What about the western side of Lake Washington?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  correctAnswersTotal++;
  //console.log('You are on a roll!');
  alert('Another correct guess!');
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('Try Again!');
} else {
  alert('That\'s not even relevant');
}
// }

// function questionFour() {
var answerFour = prompt('Maybe you think I live in the woods?').toLowerCase();
if (answerFour === 'no' || answerFour === 'n') {
  correctAnswersTotal++;
  //console.log('correct, I like the city!');
  alert('Correct, I like the city!');
} else if (answerFour === 'yes' || answerFour === 'y') {
  alert('Not a chance!');
} else {
  alert('You\'ve gotten so far, to be that wrong!');
}
// }

// function questionFive() {
var answerFive = prompt('Is it possible I live in Seattle?').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y') {
  correctAnswersTotal++;
  //console.log('You are on a roll!');
  alert(userName + '! Great guesses, you are correct!');
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('Try Again!');
} else {
  alert('That\'s not even relevant');
}
// }

// 6th question - requiring numeric input - must indicate 'high'/ 'low'
// 4 opportunities for a correct answer - after that correct answer will be given

// function questionSix() {
for (var i = 0; i < numberGuesses; i++) {
  var userAnswer = parseInt(prompt('Guess my random number. Choose between 1 and 10'));
  if (userAnswer === randomNumber) {
    correctAnswersTotal++;
    alert(`Great job ${userName}, you are correct!`);
    break;
  }
  if (userAnswer < randomNumber && i !== 4) {
    alert('Too low');
  } else if (userAnswer > randomNumber && i !== 4) {
    alert('Too high');
  } else {
    alert(`You are wrong, the correct answer is ${randomNumber}`);
    // break;
  }
  console.log(i);
}
// }

// 7th question with multiple option in an array
// 6 attempts to name them all -once guessed all possible options displayed
// final score ?/7

// function questionSeven() {
while (!guessCorrect && guessCount < totalGuesses) {
  guessCount++;
  var question = prompt(`What do you think is one of my ${favoriteColors.length} favorite colors?`).toLowerCase();
  for (var j = 0; j < favoriteColors.length; j++) {
    if (question === favoriteColors[j]) {
      correctAnswersTotal++;
      alert('That is correct');
      guessCorrect = true;
    }
  }
}
if (!guessCorrect) {
  alert('I like it but that is not correct.');
}
//all favoriteColors that were in the array
if (!guessCorrect) {
  alert(`My favorite colors are ${favoriteColors}`);
}
// }

// callout for all functions
// questionOne();
// questionTwo();
// questionThree();
// questionFour();
// questionFive();
// questionSix();
// questionSeven();

// var questionAmount = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];

// final score spelled out
alert(`Thanks for playing, you got ${correctAnswersTotal} out of 7 correct!`);

// alert(`Thanks for playing, ${userName}! Hope you enjoyed your time, and I look forward to talking more soon!`);
