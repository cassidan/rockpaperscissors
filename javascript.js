
// array containing options
const options = ["Rock", "Paper", "Scissors"];

// returns random choice from options array
function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

// gets user input via promp, capitalizes and returns it
function getPlayerChoice() {
    let playerInput = prompt("Rock, Paper, or Scissors?");

    let firstLetter = playerInput.charAt(0);
    let firstLetterCap = firstLetter.toUpperCase();
    let remainingLetters = playerInput.slice(1);
    let remainingLettersLow = remainingLetters.toLowerCase();

    let capitalizedWord = firstLetterCap + remainingLettersLow;
    return capitalizedWord;
}

// play one round, outputs log text as result
function playRound (playerSelection, computerSelection) {
    let playerChoice = playerSelection;
    let computerChoice = computerSelection;
    let result;

    console.log("You chose: " + playerChoice);
    console.log("The computer chose: " + computerChoice);

    if ((playerChoice === "Rock") && (computerChoice === "Scissors") || 
        (playerChoice === "Paper") && (computerChoice === "Rock") || 
        (playerChoice === "Scissors") && (computerChoice === "Paper")) {
          console.log("You win! " + playerChoice + " beats " + computerChoice + "!")
          result = 2; // win
          return result;
    } else if 
        ((playerChoice === "Rock") && (computerChoice === "Paper") || 
        (playerChoice === "Paper") && (computerChoice === "Scissors") || 
        (playerChoice === "Scissors") && (computerChoice === "Rock")) {
          console.log("You lose! " + computerChoice + " beats " + playerChoice + "!")
          result = 0; // loss
          return result;
    } else {
        console.log("It's a draw!");
        result = 1; // draw
    }    
}

// plays 5 rounds
function game () {
    let games = 0;
    let wins = 0;
    let losses = 0;
    let draws = 0;
    let score = 0;

    while ((games < 5) && (wins < 3) && (losses < 3)) {
        score = playRound(getPlayerChoice(), getComputerChoice());
        if (score === 2) {
            wins++
        } else if (score === 0) {
            losses++
        } else {
            draws++;
        }
        games++;
        console.log(games + " played, " + wins + " wins, " + losses + " losses.")
    }

    if (wins > losses) {
        console.log("You won the game! Of " + games + " rounds played, you won " + 
        wins + ", lost " + losses + ", and there were " + draws + " draws.")
    } else  if (losses > wins) {
        console.log("You lost the game! Of " + games + " rounds played, you won " + 
        wins + ", lost " + losses + ", and there were " + draws + " draws.")
    } else {
        console.log("It's a draw! Of " + games + " rounds played, you won " + 
        wins + ", lost " + losses + ", and there were " + draws + " draws.")
    }
}

game();




