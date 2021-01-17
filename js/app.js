'use strict';

// console.log('hello world');

// //linter test - Passed - I do not have red lines underneath banana
// var banana = 42;

var correctAnswersTotal = 0;
var userName = prompt('Welcome to my About Me Page! Which includes a quick guessing game. Before we begin though, what is your name?');
alert(`Hello ${userName}, glad to meet you - You will have 5 (yes or no) guesses to figure out where I live`);
// write 5 questions - yes or no - y or n (not case sensitive)

function questionOne() {
  var answerOne = prompt('Do you think I live in Washington?').toLowerCase();
  if (answerOne === 'yes' || answerOne === 'y') {
    correctAnswersTotal++;
    // console.log('you are correct!')
    alert('you are correct!');
  } else {
    alert('close, but not quite.');
  }
}

function questionTwo() {
  var answerTwo = prompt('Do you think I live on the East side of the mountains?').toLowerCase();
  if (answerTwo === 'no' || answerTwo === 'n') {
    correctAnswersTotal++;
    //console.log('You are on a roll!');
    alert('Another correct guess!');
  } else if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('Try Again!');
  } else {
    alert('that\'s not even relevant');
  }
}

function questionThree() {
  var answerThree = prompt('What about the Western side of Lake Washington?').toLowerCase();
  if (answerThree === 'yes' || answerThree === 'y') {
    correctAnswersTotal++;
    //console.log('You are on a roll!');
    alert('Another correct guess!');
  } else if (answerThree === 'no' || answerThree === 'n') {
    alert('Try Again!');
  } else {
    alert('that\'s not even relevant');
  }
}

function questionFour() {
  var answerFour = prompt('Maybe you think I live in the woods?').toLowerCase();
  if (answerFour === 'no' || answerFour === 'n') {
    correctAnswersTotal++;
    //console.log('correct, I like the city!');
    alert('correct, I like the city!');
  } else if (answerFour === 'yes' || answerFour === 'y') {
    alert('Not a chance!');
  } else {
    alert('You\'ve gotten so far, to be that wrong!');
  }
}

function questionFive() {
  var answerFive = prompt('Is it possible I live in Seattle?').toLowerCase();
  if (answerFive === 'yes' || answerFive === 'y') {
    correctAnswersTotal++;
    //console.log('You are on a roll!');
    alert(userName + '! Great guesses, you are correct!');
  } else if (answerFive === 'no' || answerFive === 'n') {
    alert('Try Again!');
  } else {
    alert('that\'s not even relevant');
  }
}


questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();

// 6th question - requiring numeric input - must indicate 'high'/ 'low'
// 4 opportunities for a correct answer - after that correct answer will be given

var numberGuesses = 4;
var correctNumber = 24;

for (var i = 0; i < numberGuesses; i++) {
  var userAnswer = parseInt(prompt('Guess how long I have lived in WA?'));
  if (userAnswer === correctNumber) {
    correctAnswersTotal++;
    alert(`Great job ${userName}, you are correct!`);
    break;
  }
  if (userAnswer < correctNumber && i !== 4) {
    alert('Longer than that');
  } else if (userAnswer > correctNumber && i !== 4) {
    alert('Not that many years');
  } else {
    alert(`you are wrong, correct answer is ${correctNumber} years total`);
    // break;
  }
  // console.log(i);
}

// 7th question with multiple option in an array
// 6 attempts to name them all -once guessed all possible options displayed
// final score ?/7
var favoriteColors = ['blue', ' black', ' green'];
var guessCount = 0;
var guessMax = 6;
var guessCorrect = false;

while (!guessCorrect && guessCount < guessMax) {
  guessCount++;
  var question = prompt('What do you think are my favorite color?').toLowerCase();
  for (var j = 0; j < favoriteColors.length; j++) {
    if (question === favoriteColors[j]) {
      correctAnswersTotal++;
      alert('that is correct');
      guessCorrect = true;
    }
  }
}
if (!guessCorrect) {
  alert('not on my list');
}

//all favoriteColors that were in the array
if (!guessCorrect) {
  alert(`the correct favoriteColors are ${favoriteColors}`);
}

// final score spelled out
alert(`thanks for playing, you got ${correctAnswersTotal} out of 7 correct!`);


// alert(`Thanks for playing, ${userName}! Hope you enjoyed your time, and I look forward to talking more soon!`);