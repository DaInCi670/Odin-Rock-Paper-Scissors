"use strict";

//Function to
function getComputerChoice() {
  let randomizer = Math.ceil(Math.random() * 3);
  if (randomizer === 2) {
    return "paper";
  }
  if (randomizer === 1) {
    return "rock";
  }
  if (randomizer === 3) {
    return "scissors";
  }
}

//Function for variables

function getPlayerSelection() {
  return `${prompt("Rock, Paper or Scissors:")}`;
}

function playRound(playerChoice, computerSelection) {
  playerChoice = getPlayerSelection().toLowerCase();
  if (playerChoice === computerSelection) {
    return `Its a tie`;
  }
  if (playerChoice === "rock") {
    if (computerSelection === "paper") {
      return `You Lose! Paper beats Rock`;
    }
    if (computerSelection === "scissors") {
      return `You Win! Rock beats Scissors`;
    }
  }
  if (playerChoice === "paper") {
    if (computerSelection === "scissors") {
      return `You Lose! Scissors beats Paper`;
    }
    if (computerSelection === "rock") {
      return `You Win! Paper beats Rock`;
    }
  }
  if (playerChoice === "scissors") {
    if (computerSelection === "rock") {
      return `You Lose! Rock beats Scissors `;
    }
    if (computerSelection === "paper") {
      return `You Win! Scissors beats Paper`;
    }
  } else {
    return alert("Invalid");
  }
}

// console.log(playRound(getPlayerSelection, computerSelection));

function playGame() {
  console.log(playRound(getPlayerSelection, getComputerChoice()));
  console.log(playRound(getPlayerSelection, getComputerChoice()));
  console.log(playRound(getPlayerSelection, getComputerChoice()));
  console.log(playRound(getPlayerSelection, getComputerChoice()));
  console.log(playRound(getPlayerSelection, getComputerChoice()));
}

// playGame();

playGame()
