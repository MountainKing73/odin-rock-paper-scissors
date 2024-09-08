function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "";
  }
}

function getHumanChoice() {
  let answer = prompt("Pick rock, paper, or scissors:");

  answer = answer.toLowerCase();
  return answer;
}

function playGame(rounds) {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You tie! Both picked ${humanChoice}`);
    }
  }

  for (i = 0; i < rounds; i++) {
    let computerChoice = getComputerChoice();
    console.log("Computer choice: " + computerChoice);

    let humanChoice = getHumanChoice();
    console.log("Player choice: " + humanChoice);

    playRound(humanChoice, computerChoice);
    console.log(
      "Player score: " + humanScore + " computer score: " + computerScore,
    );
  }
}

playGame(5);
