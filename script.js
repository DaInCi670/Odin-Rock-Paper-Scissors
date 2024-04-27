"use strict";

//Global Variables
let playerScore = 0;
let computerScore = 0;

const rpsSelect = document.querySelector(".rps-select");
const score = document.querySelector("h4");
const player = document.querySelector("#player");
const pc = document.querySelector("#computer");
const currPlayerScore = document.querySelector("#player-score");
currPlayerScore.textContent = playerScore;
const currComputerScore = document.querySelector("#computer-score");
currComputerScore.textContent = computerScore;
// document.addEventListener("DOMContentLoaded", () => {
//   score.style.cssText =
//     "color:orangered; margin-left:100px ;transition: all 0.5s ease-out ";
// });

//Function to get computer choice between rock, paper and scissors
function getComputerChoice() {
  let randomizer = Math.ceil(Math.random() * 3);

  if (randomizer === 1) {
    return (pc.textContent = "🪨");
  } else if (randomizer === 2) {
    return (pc.textContent = "📃");
  } else return (pc.textContent = "✂️");
}

//Function to play a round
function playRound(a, b) {
  if (a === b) {
    score.textContent = `No Points Awarded!`;
    currPlayerScore.textContent = playerScore;
    currComputerScore.textContent = computerScore;
  } else if (a === "🪨") {
    if (b === "✂️") {
      playerScore += 1;
      currPlayerScore.textContent = playerScore;
      currComputerScore.textContent = computerScore;

      score.textContent = `You Win! Rock beats Scissors`;
    } else if (b === "📃") {
      computerScore += 1;
      currPlayerScore.textContent = playerScore;
      currComputerScore.textContent = computerScore;
      score.textContent = `You Lose! Paper beats Rock`;
    }
  } else if (a === "📃") {
    if (b === "🪨") {
      playerScore += 1;
      currPlayerScore.textContent = playerScore;
      currComputerScore.textContent = computerScore;
      score.textContent = `You Win! Paper beats Rock`;
    } else if (b === "✂️") {
      computerScore += 1;
      currPlayerScore.textContent = playerScore;
      currComputerScore.textContent = computerScore;
      score.textContent = `You Lose! Scissors beats Paper`;
    }
  } else if (a === "✂️") {
    if (b === "📃") {
      playerScore += 1;
      currPlayerScore.textContent = playerScore;
      currComputerScore.textContent = computerScore;
      score.textContent = `You Win! Scissors beats paper`;
    } else if (b === "🪨") {
      computerScore += 1;
      currPlayerScore.textContent = playerScore;
      currComputerScore.textContent = computerScore;
      score.textContent = `You Lose! Rock beats Scissors`;
    }
  }
}

rpsSelect.addEventListener("click", (e) => {
  let click = e.target;
  switch (click.id) {
    case "rock":
      playRound("🪨", getComputerChoice());
      player.textContent = "🪨";
      break;
    case "paper":
      playRound("📃", getComputerChoice());
      player.textContent = "📃";
      break;
    case "scissors":
      playRound("✂️", getComputerChoice());
      player.textContent = "✂️";
      break;
  }
  if (playerScore >= 5) {
    currPlayerScore.classList.add("play-winner");
    currComputerScore.classList.add("play-loser");
    score.textContent = `Match Over! You Win The Game🎉`;
    currPlayerScore.textContent = playerScore;
    currComputerScore.textContent = computerScore;
    document.addEventListener("click", handler, true);
    function handler(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  } else if (computerScore >= 5) {
    currPlayerScore.classList.add("play-loser");
    currComputerScore.classList.add("play-winner");
    score.textContent = `Match Over! You Lose The Game💀`;
    currPlayerScore.textContent = playerScore;
    currComputerScore.textContent = computerScore;
    document.addEventListener("click", handler, true);
    function handler(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  console.log(player.textContent, pc.textContent);
});
