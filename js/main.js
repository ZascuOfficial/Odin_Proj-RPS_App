let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {

  let randomChoice = Math.floor(
    Math.random() * 3
  );

  switch (randomChoice) {

    case 0: return 'Rock';
    case 1: return 'Paper';
    case 2: return 'Scissors';

  }

}

function playRound(playerSelection, computerSelection) {

  switch (playerSelection.toLowerCase()) {

    case 'rock':
      if (computerSelection === 'Rock') {

        return 'It\'s a tie! Rock can\'t beat Rock!';

      } else if (computerSelection === 'Paper') {
        computerScore++;

        return 'You lose! Paper beats Rock!';
      } else {
        playerScore++;

        return 'You win! Rock beats Scissors!';
      }

    case 'paper':
      if (computerSelection === 'Rock') {
        playerScore++;

        return 'You win! Paper beats Rock!';
      } else if (computerSelection === 'Paper') {

        return 'It\s a tie! Paper can\'t beat Paper!';

      } else {
        computerScore++;

        return 'You lose! Scissors beat Paper!';
      }

    case 'scissors':
      if (computerSelection === 'Rock') {
        computerScore++;

        return 'You lose! Rock beats Scissors!';
      } else if (computerSelection === 'Paper') {
        playerScore++;

        return 'You win! Scissors beat Paper!';
      } else {

        return 'It\'s a tie! Scissors can\'t beat Scissors!';

      }

    default:
      return 'This is not a viable option.';

  }

}

function game() {

  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt('Please input your choice (Rock / Paper / Scissors): ');
    let computerChoice = getComputerChoice();

    console.log(playRound(playerChoice, computerChoice));
  }

  if (playerScore > computerScore) {
    console.log('The player wins!');
  } else if (playerScore === computerScore) {
    console.log('It\'s a tie!');
  } else {
    console.log('The computer wins!');
  }

}

game();