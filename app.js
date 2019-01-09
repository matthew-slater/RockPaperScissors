//Javascript variables / working variables
var userScore = 0;
var computerScore = 0;

// DOM variables  **caching the dom**
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result-text > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissor");
const action_div = document.getElementById("action-message");

function main() {
  //rock event listener
  rock_div.addEventListener("click", function() {
    game("r");
  });

  //paper event listener
  paper_div.addEventListener("click", function() {
    game("p");
  });

  //scissors event listener
  scissors_div.addEventListener("click", function() {
    game("s");
  });
}

main();

function game(userChoice) {
  var compChoice = getCompChoice();

  //Switch statement to determine result
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, compChoice);
      break;
    case "ss":
    case "rr":
    case "pp":
      tied(userChoice, compChoice);
      break;
  }
}

function getCompChoice() {
  const choices = ["r", "p", "s"];
  //Math function that rounds down the random number provided by math.random
  const randomNum = Math.floor(Math.random() * 3);

  return choices[randomNum];
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  var userWord = convertWord(user);
  var computerWord = convertWord(computer);
  result_p.innerHTML = `${userWord} beats ${computerWord}`;
  //ES6 convention for combining strings w/o using +
  action_div.innerHTML = `You Win.  Play Again?`;
}

function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  var userWord = convertWord(user);
  var computerWord = convertWord(computer);
  result_p.innerHTML = `${userWord} lost to ${computerWord}`;
  action_div.innerHTML = `You Lost.  Play Again?`;
}

function tied(user, computer) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  var userWord = convertWord(user);
  var computerWord = convertWord(computer);
  result_p.innerHTML = `${userWord} draws ${computerWord}`;
  action_div.innerHTML = `You Draw.  Play Again?`;
}

function convertWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}
