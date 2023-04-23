
// array containing options
const options = ["Rock", "Paper", "Scissors"];

const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const record = document.querySelector('#record');
const recordPlayerChoice = document.querySelector('#recordPlayerChoice');
const recordComputerChoice = document.querySelector('#recordComputerChoice');
const recordResult = document.querySelector('#recordResult');

// returns random choice from options array
function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

function game() {
  let games = 0;
  let score = 0;
  let wins = 0;
  let losses = 0;
  let draws = 0;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      score = playRound(button.id, getComputerChoice());
      while ((wins < 5) && (losses < 5)) {
        recordComputerChoice.style.fontSize = "16px";
        if (score === 2) {
            wins++;
            playerScore.textContent = wins;
            playerScore.style.color = "green";
            computerScore.textContent = losses;
            computerScore.style.color = "antiquewhite";
        } else if (score === 0) {
            losses++;
            playerScore.textContent = wins;
            playerScore.style.color = "antiquewhite";
            computerScore.textContent = losses;
            computerScore.style.color = "red";
        } else {
            draws++;
            playerScore.style.color = "antiquewhite";
            computerScore.style.color = "antiquewhite";
        }
        games++;
        console.log(wins + " wins, " + losses + " losses.");
        break;
    }

    if ((wins === 5) || (losses === 5)) {
      if (wins > losses) {
          recordResult.textContent = "";
          recordPlayerChoice.textContent = "";
          recordComputerChoice.style.fontSize = "32px";
          recordComputerChoice.textContent = "You won the game! Of " + games + " rounds played, you won " + 
          wins + ", lost " + losses + ", and there were " + draws + " draws.";
      } else  if (losses > wins) {
          recordResult.textContent = "";
          recordPlayerChoice.textContent = "";
          recordComputerChoice.style.fontSize = "32px";
          recordComputerChoice.textContent = "You lost the game! Of " + games + " rounds played, you won " + 
          wins + ", lost " + losses + ", and there were " + draws + " draws.";
      } else {
          recordResult.textContent = "";
          recordPlayerChoice.textContent = "";
          recordComputerChoice.style.fontSize = "32px";
          recordComputerChoice.textContent = "You lost the game! Of " + games + " rounds played, you won " + 
          wins + ", lost " + losses + ", and there were " + draws + " draws.";
      }
      games = 0; score = 0; wins = 0; losses = 0; draws = 0;
    }
    });
  });
}

// play one round, outputs log text as result
function playRound (playerSelection, computerSelection) {
    let playerChoice = playerSelection;
    let computerChoice = computerSelection;
    let result;

    recordPlayerChoice.textContent = "You chose: " + playerChoice;
    recordComputerChoice.textContent = "The computer chose: " + computerChoice;

    if ((playerChoice === "Rock") && (computerChoice === "Scissors") || 
        (playerChoice === "Paper") && (computerChoice === "Rock") || 
        (playerChoice === "Scissors") && (computerChoice === "Paper")) {
          recordResult.textContent = "You win! " + playerChoice + " beats " + computerChoice + "!"
          result = 2; // win
          return result;
    } else if 
        ((playerChoice === "Rock") && (computerChoice === "Paper") || 
        (playerChoice === "Paper") && (computerChoice === "Scissors") || 
        (playerChoice === "Scissors") && (computerChoice === "Rock")) {
          recordResult.textContent = "You lose! " + computerChoice + " beats " + playerChoice + "!"
          result = 0; // loss
          return result;
    } else {
        recordResult.textContent = "It's a draw!";
        result = 1; // draw
    }    
}

game();




