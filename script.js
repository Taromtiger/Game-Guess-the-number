'use strict';

// console.log(document.querySelector('.guess-message').textContent);

// document.querySelector('.guess-message').textContent = 'Правильно!';

// document.querySelector('.question').textContent = 7;

// document.querySelector('.score').textContent = 11;


// console.log(document.querySelector('.number-input').value);

// document.querySelector('.number-input').value = 13;

// console.log(document.querySelector('.number-input').value);

// const eventHandler = () => {
//   console.log(document.querySelector('.number-input').value);
// }

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let bestScore = 0;

const displayGuessMessage = (message) => {
  document.querySelector('.guess-message').textContent = message;
};
const displayScore = (score) => {
  document.querySelector('.score').textContent = score;
};
const displayQuestion = (question) => {
  document.querySelector('.question').textContent = question;
};
const questionWidth = (width) => {
  document.querySelector('.question').style.width = width;
}
const bodyBg = (color) => {
  document.querySelector('body').style.backgroundColor = color;
}


document.querySelector('.check').addEventListener('click', () => {
  const quessingNumber = Number(document.querySelector('.number-input').value);

  if (!quessingNumber) {
    displayGuessMessage('Введіть число!');

  } else if (quessingNumber === secretNumber) {
    displayGuessMessage('Правильно!');
    displayQuestion(secretNumber)
    bodyBg('rgb(9, 250, 21)');
    questionWidth('50rem')

    if (score > bestScore) {
      bestScore = score;
      document.querySelector('.highscore').textContent = bestScore;
    };

  } else if (quessingNumber !== secretNumber) {

    if (score > 1) {
      displayGuessMessage(quessingNumber > secretNumber ? 'Введене число більше від загаданого' : 'Введене число менше від загаданого');
      score--;
      displayScore(score);

    } else {
      displayGuessMessage('Гра завершена, ви програли');
      displayScore(0);
    };
  };
});
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  score = 20;
  displayQuestion('???');
  questionWidth('25rem');
  displayGuessMessage('Починай відгадувати!');
  displayScore(score);
  bodyBg('rgb(0, 0, 0)');
  document.querySelector('.number-input').value = '';
});





/** Код до рефакторінга
 * 
// console.log(secretNumber);
// document.querySelector('.question').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', () => {
  const quessingNumber = Number(document.querySelector('.number-input').value);

  // console.log(quessingNumber, typeof quessingNumber);

  // No input
  if (!quessingNumber) {

    // document.querySelector('.guess-message').textContent = 'Введіть число!';
    displayGuessMessage('Введіть число!');

  }
  // Player won
  else if (quessingNumber === secretNumber) {


    // document.querySelector('.guess-message').textContent = 'Правильно!';
    displayGuessMessage('Правильно!');


    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';

    if (score > bestScore) {
      bestScore = score;
      document.querySelector('.highscore').textContent = bestScore;
    };
  }

  // Number from input is wrong
  else if (quessingNumber !== secretNumber) {

    if (score > 1) {

      // document.querySelector('.guess-message').textContent =
      //   quessingNumber > secretNumber ? 'Введене число більше від загаданого' : 'Введене число менше від загаданого';
      displayGuessMessage(quessingNumber > secretNumber ? 'Введене число більше від загаданого' : 'Введене число менше від загаданого');
      score--;


      // document.querySelector('.score').textContent = score;
      displayScore(score);


    } else {
      // document.querySelector('.guess-message').textContent = 'Гра завершена, ви програли';
      displayGuessMessage('Гра завершена, ви програли');


      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    };
  };

  // Too high number
  // else if (quessingNumber > secretNumber) {

  //   if (score > 1) {
  //     document.querySelector('.guess-message').textContent = 'Введене число більше від загаданого';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess-message').textContent = 'Гра завершена, ви програли';
  //     document.querySelector('.score').textContent = 0;
  //   }

  // Too low number
  // } else if (quessingNumber < secretNumber) {

  //   if (score > 1) {
  //     document.querySelector('.guess-message').textContent = 'Введене число менше від загаданого';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess-message').textContent = 'Гра завершена, ви програли';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Button 'again'
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  score = 20;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';


  // document.querySelector('.guess-message').textContent = 'Починай відгадувати!';
  displayGuessMessage('Починай відгадувати!');


  // document.querySelector('.score').textContent = score;
  displayScore(score);


  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.number-input').value = '';
});
*/