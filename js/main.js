const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

const playerChoiceEl = document.getElementById('player-choice-el');
const playerPointsEl = document.getElementById('player-points-el');

const computerChoiceEl = document.getElementById('computer-choice-el');
const computerPointsEl = document.getElementById('computer-points-el');

const narratorEl = document.getElementById('narrator-el');

const computerChoices = ['Rock', 'Paper', 'Scissors'];

let isDead = false;

let playerChoice = '';
let computerChoice = '';

let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
  return computerChoices[
    Math.floor(
      Math.random() * 3
    )
  ];
}

rockBtn.addEventListener('click', () => {
  if (!isDead) {
    playerChoice = 'Rock';
    computerChoice = getComputerChoice();

    compareChoices(playerChoice, computerChoice);

    playerPointsEl.textContent = `Points: ${playerPoints}`;
    computerPointsEl.textContent = `Points: ${computerPoints}`;

    checkPoints(playerPoints, computerPoints);
  } else {
    narratorEl.textContent = 'The game is over. Refresh the page for a new match.';
    narratorEl.style.color = '#928374'
  }
});

paperBtn.addEventListener('click', () => {
  if (!isDead) {
    playerChoice = 'Paper';
    computerChoice = getComputerChoice();

    compareChoices(playerChoice, computerChoice);

    playerPointsEl.textContent = `Points: ${playerPoints}`;
    computerPointsEl.textContent = `Points: ${computerPoints}`;

    checkPoints(playerPoints, computerPoints);
  } else {
    narratorEl.textContent = 'The game is over. Refresh the page for a new match.';
    narratorEl.style.color = '#928374'
  }
});

scissorsBtn.addEventListener('click', () => {
  if (!isDead) {
    playerChoice = 'Scissors';
    computerChoice = getComputerChoice();

    compareChoices(playerChoice, computerChoice);

    playerPointsEl.textContent = `Points: ${playerPoints}`;
    computerPointsEl.textContent = `Points: ${computerPoints}`;

    checkPoints(playerPoints, computerPoints);
  } else {
    narratorEl.textContent = 'The game is over. Refresh the page for a new match.';
    narratorEl.style.color = '#928374'
  }
});

function compareChoices(playerChoice, computerChoice) {
  playerChoiceEl.textContent = `Choice: ${playerChoice}`;
  computerChoiceEl.textContent = `Choice: ${computerChoice}`;

  if (playerChoice ===  computerChoice) {
    narratorEl.textContent = 'Round conclusion: Tie.';
    narratorEl.style.color = '#d79921';
  }

  if (
    (playerChoice === 'Rock' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Scissors') ||
    (playerChoice === 'Scissors' && computerChoice === 'Rock')
  ) {
    narratorEl.textContent = 'Round conclusion: Computer wins.';
    narratorEl.style.color = '#d65d0e';

    computerPoints++;
  }

  if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    narratorEl.textContent = 'Round conclusion: Player wins.';
    narratorEl.style.color = '#98971a';

    playerPoints++;
  }
}

function checkPoints(playerPoints, computerPoints) {
  if (playerPoints === 5 || computerPoints === 5) {
    isDead = true;

    if (playerPoints === 5) {
      narratorEl.style.color = '#98971a';
      narratorEl.textContent = `The winner is the Player!`;
    } else {
      narratorEl.style.color = '#d65d0e';
      narratorEl.textContent = `The winner is the Computer!`;
    }
  }
}