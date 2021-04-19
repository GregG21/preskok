const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const DEFAULT_USER_CHOICE = ROCK;
const DRAW = "draw";
const PLAYER_WINS = "player wins";
const COMPUTER_WINS = "Computer wins";

let gameIsRunning = false;
const getPlayerChoice = () => {
  const selection = prompt("Rock, Paper or Scissors?", "").toLowerCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert("Invalid Choice, we chose Rock for you!");
    return;
  }
  return selection;
};

let choices = [ROCK, PAPER, SCISSORS];

const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

getComputerChoice();

const getWinnner = (playerChoice = ROCK, computerChoice) => {
  if (playerChoice === computerChoice) return DRAW;
  else if (
    (computerChoice === ROCK && playerChoice === ROCK) ||
    (computerChoice === PAPER && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return PLAYER_WINS;
  } else return COMPUTER_WINS;
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  console.log(playerChoice);
  let winResult;
  if (playerChoice) {
    winResult = getWinnner(playerChoice, computerChoice);
  } else {
    winResult = getWinnner(computerChoice);
  }

  let message;
  if (winResult === DRAW) {
    message = `You picked ${
      playerChoice ? playerChoice : ROCK
    }\nThe Computer picked ${computerChoice}\nIt's a draw :)`;
  } else if (winResult === PLAYER_WINS) {
    message = `You picked ${
      playerChoice ? playerChoice : ROCK
    }\nThe Computer picked ${computerChoice}\nYou WIN!`;
  } else {
    message = `You picked ${
      playerChoice ? playerChoice : ROCK
    }\nThe Computer picked ${computerChoice}\nThe computer wins!`;
  }
  alert(message);
  gameIsRunning = false;
});
