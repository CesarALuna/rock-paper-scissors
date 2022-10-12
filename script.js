const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", playRound);

// function getPlayerChoice() {
//   playerSelection = prompt("Rock, paper, scissors?").toLocaleLowerCase();
//   if (
//     playerSelection === "rock" ||
//     playerSelection === "paper" ||
//     playerSelection === "scissors"
//   ) {
//     console.log("You chose " + `${playerSelection}`);
//     getComputerChoice();
//     console.log("The computer chose " + `${computerSelection}`);
//   } else {
//     console.log("Please make a valid selection");
//     location.reload();
//   }
// }
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    computerSelection = "rock";
  } else if (choice === 1) {
    computerSelection = "paper";
  } else if (choice === 2) {
    computerSelection = "scissors";
  }
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = this.id;

  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection === computerSelection) {
    console.log("Tie!");
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return playerScore++;
    console.log("You won!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return computerScore++;
    console.log("You lose!");
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return playerScore++;
    console.log("You won!");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return computerScore++;
    console.log("You lose!");
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return playerScore++;
    console.log("You won!");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return computerScore++;
    console.log("You lose!");
  }
}

function game() {
  playerScore = 0;
  computerScore = 0;

  // for (let i = 0; i < 5; i++) {
  //   getPlayerChoice();
  //   playRound(playerSelection, computerSelection);
  //   console.log(
  //     `Player Score: ${playerScore}\nComputer Score: ${computerScore}`
  //   );
  // }
}

game();
