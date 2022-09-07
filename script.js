function getComputerChoice() {
  // will randomly generate a choice for computer
  // code go here :)
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    computerSelection = "rock";
  } else if (choice === 1) {
    computerSelection = "paper";
  } else if (choice === 2) {
    computerSelection = "scissors";
  } else {
    print("There has been some kind of mistake lol");
  }
  console.log(computerSelection);
}

// function oneRound(playerSelection, computerSelection) {}
