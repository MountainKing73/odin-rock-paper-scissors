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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const resultDiv = document.querySelector("#results");
  const results = document.createElement("p");
  const score = document.createElement("p");
  const winner = document.createElement("p");
  resultDiv.appendChild(results);
  resultDiv.appendChild(score);
  resultDiv.appendChild(winner);

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else {
      results.textContent = `You tie! Both picked ${humanChoice}`;
    }

    score.textContent =
      "Player score: " + humanScore + " computer score: " + computerScore;

    if (humanScore >= 5) {
      winner.textContent = "You win!";
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
    }

    if (computerScore >= 5) {
      winner.textContent = "You lose!";
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
    }
  }

  function btnClicked(choice) {
    let computerChoice = getComputerChoice();

    let humanChoice = choice;
    playRound(humanChoice, computerChoice);
  }

  const rockBtn = document.querySelector("#rock");
  const paperBtn = document.querySelector("#paper");
  const scissorsBtn = document.querySelector("#scissors");

  rockBtn.addEventListener("click", function (e) {
    btnClicked(e.target.id);
  });
  paperBtn.addEventListener("click", function (e) {
    btnClicked(e.target.id);
  });
  scissorsBtn.addEventListener("click", function (e) {
    btnClicked(e.target.id);
  });
}

playGame();
