const narratorEl = document.querySelector('#narrator-el');

const buttonEls = document.querySelectorAll('.btn');

const playerChoiceEl = document.querySelector('#player-choice-el');
const playerPointsEl = document.querySelector('#player-points-el');
const computerChoiceEl = document.querySelector('#computer-choice-el');
const computerPointsEl = document.querySelector('#computer-points-el');

const choices = [
  'Rock',
  'Paper',
  'Scissors'
];

let isDead = false;

let playerChoice = '';
let playerPoints = 0;
let computerChoice = '';
let computerPoints = 0;

function getPlayerChoice(button) {
  switch (button.id) {
    case 'rock-btn': return 'Rock';
    case 'paper-btn': return 'Paper';
    case 'scissors-btn': return 'Scissors';
  }
}

function getComputerChoice() {
  return choices[
    Math.floor(
      Math.random() * 3
    )
  ];
}

buttonEls.forEach((button) => {
  button.addEventListener('click', () => {
    
    if (!isDead) {
      playerChoice = getPlayerChoice(button);
      computerChoice = getComputerChoice();

      playerChoiceEl.textContent = `Choice: ${playerChoice}`;
      computerChoiceEl.textContent = `Choice: ${computerChoice}`;

      compareChoices(playerChoice, computerChoice);

      playerPointsEl.textContent = `Points: ${playerPoints}`;
      computerPointsEl.textContent = `Points: ${computerPoints}`;

      comparePoints(playerPoints, computerPoints);
    } else {
      playerChoiceEl.textContent = 'Choice: None';
      playerPointsEl.textContent = 'Points: 0';
      computerChoiceEl.textContent = 'Choice: None';
      computerPointsEl.textContent = 'Points: 0';

      narratorEl.textContent = 'The game is over. Refresh the page for a new match.';
      narratorEl.style.color = '#928374'
    }

  });
});

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice ===  computerChoice) {
    narratorEl.textContent = 'Round conclusion: Tie.';
    narratorEl.style.color = '#d79921';
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Scissors') ||
    (playerChoice === 'Scissors' && computerChoice === 'Rock')
  ) {
    narratorEl.textContent = 'Round conclusion: Computer wins.';
    narratorEl.style.color = '#d65d0e';

    computerPoints++;
  } else {
    narratorEl.textContent = 'Round conclusion: Player wins.';
    narratorEl.style.color = '#98971a';

    playerPoints++;
  }
}

function comparePoints(playerPoints, computerPoints) {
  if (playerPoints === 5 || computerPoints === 5) {
    isDead = true;

    if (playerPoints === 5) {
      narratorEl.textContent = `The winner is the Player!`;
      narratorEl.style.color = '#98971a';
    } else {
      narratorEl.textContent = `The winner is the Computer!`;
      narratorEl.style.color = '#d65d0e';
    }
  }
}