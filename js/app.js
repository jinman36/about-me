'use strict';

// console.log('hello world');

// //linter test - Passed - I do not have red lines underneath banana
// let banana = 42;

let correctAnswersTotal = 0;
let favoriteColors = ['blue', 'black', 'green'];
let guessCount = 0;
let totalGuesses = 6;
let numberGuesses = 4;
let guessCorrect = false;
let randomNumber = Math.floor(Math.random() * 10) + 1;

function tryAgain() {
  alert('Try again!');
}

function notRelevant() {
  alert('That is not close!')
}

let userName = prompt('Welcome to my About Me Page! Before we begin with the games though, what\'s your name?');
alert(`Hello ${userName}, glad to meet you - I have 3 games that include 7 questions about different things I like. Hope you enjoy, good luck!`);
// write 5 questions - yes or no - y or n (not case sensitive)

function questionOne() {
  let answerOne = prompt('Do you think I live in Washington?').toLowerCase();
  if (answerOne === 'yes' || answerOne === 'y') {
    correctAnswersTotal++;
    // console.log('you are correct!')
    alert('You are correct!');
  } else {
    alert('Close, but not quite.');
  }
}

function questionTwo() {
  let answerTwo = prompt('Do you think I live on the East side of the mountains?').toLowerCase();
  if (answerTwo === 'no' || answerTwo === 'n') {
    correctAnswersTotal++;
    //console.log('You are on a roll!');
    alert('Another correct guess!');
  } else if (answerTwo === 'yes' || answerTwo === 'y') {
    tryAgain();
  } else {
    notRelevant();
  }
}

function questionThree() {
  let answerThree = prompt('What about the western side of Lake Washington?').toLowerCase();
  if (answerThree === 'yes' || answerThree === 'y') {
    correctAnswersTotal++;
    //console.log('You are on a roll!');
    alert('Another correct guess!');
  } else if (answerThree === 'no' || answerThree === 'n') {
    tryAgain();
  } else {
    notRelevant();
  }
}

function questionFour() {
  let answerFour = prompt('Maybe you think I live in the woods?').toLowerCase();
  if (answerFour === 'no' || answerFour === 'n') {
    correctAnswersTotal++;
    //console.log('correct, I like the city!');
    alert('Correct, I like the city!');
  } else if (answerFour === 'yes' || answerFour === 'y') {
    tryAgain();
  } else {
    alert('You\'ve gotten so far, to be that wrong!');
  }
}

function questionFive() {
  let answerFive = prompt('Is it possible I live in Seattle?').toLowerCase();
  if (answerFive === 'yes' || answerFive === 'y') {
    correctAnswersTotal++;
    //console.log('You are on a roll!');
    alert(userName + '! Great guesses, you are correct!');
  } else if (answerFive === 'no' || answerFive === 'n') {
    tryAgain();
  } else {
    notRelevant();
  }
}

// Question 6- requiring numeric input - must indicate 'high'/ 'low'
// 4 opportunities for a correct answer - after that correct answer will be given
//for other integer questions - parceInt(prompt('Guess my random number. Choose between 1 and 10')); - the plus is an awesome shorthand!

function questionSix() {
  for (let i = 0; i < numberGuesses; i++) {
    let userAnswer = +prompt('Guess my random number. Choose between 1 and 10');
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
    // console.log(i);
  }
}

// Question 7 -  with multiple option in an array
// 6 attempts to name them all -once guessed all possible options displayed
// final score ?/7

function questionSeven() {
  while (!guessCorrect && guessCount < totalGuesses) {
    guessCount++;
    let question = prompt(`What do you think is one of my ${favoriteColors.length} favorite colors?`).toLowerCase();
    for (let j = 0; j < totalGuesses; j++) {
      if (question === favoriteColors[j]) {
        correctAnswersTotal++;
        alert('That is correct');
        guessCorrect = true;
      }
    }
  }
  if (!guessCorrect) {
    tryAgain();
  }
  //all favoriteColors that were in the array
  if (!guessCorrect) {
    alert(`My favorite colors are ${favoriteColors}`);
  }
}

// callout for all functions
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

let questionAmount = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];

// final score spelled out
alert(`Thanks for playing, you got ${correctAnswersTotal} out of ${questionAmount.length} correct!`);

// alert(`Thanks for playing, ${userName}! Hope you enjoyed your time, and I look forward to talking more soon!`);
