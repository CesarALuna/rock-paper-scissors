let userScore = 0;
let computerScore = 0;

//DOM variables --> underscore
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${user} beats ${computer}. You win!`;
  document.getElementById(user).classList.add("green-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("green-glow");
  }, 300);
}

function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${computer} beats ${user}. Computer win!`;
  document.getElementById(user).classList.add("red-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("red-glow");
  }, 300);
}

function draw(user, computer) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `You both picked ${user}. It's a tie!`;
  document.getElementById(user).classList.add("gray-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("gray-glow");
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorpaper":
      win(userChoice, computerChoice);
      console.log("USER WINS");
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      console.log("USER LOSES");
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      console.log("ITS A TIE");
      break;
  }
}

function main() {
  // return the selected div id as the userChoice variable
  rock_div.addEventListener("click", () => {
    game("rock");
  });

  paper_div.addEventListener("click", () => {
    game("paper");
  });

  scissors_div.addEventListener("click", () => {
    game("scissors");
  });
}

main();
