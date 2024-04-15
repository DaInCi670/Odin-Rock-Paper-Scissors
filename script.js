"use strict";

//Function to get computer choice between rock, paper and scissors
function getComputerChoice() {
  let randomizer = Math.ceil(Math.random() * 3);

  if (randomizer === 1) {
    return "rock";
  } else if (randomizer === 2) {
    return "paper";
  } else return "scissors";
}

//Function to get player choice
function getplayerSelection() {
  let playerChoice = prompt("Rock, Paper or Scissors:").toLowerCase();
  return playerChoice;
}

//Function to play a round
function playRound(a, b) {
  if (a === "rock") {
    if (b === "paper") {
      return "You lose! Paper beats Rock";
    } else if (b === "scissors") {
      return "You win! Rock beats Scissors";
    } else return "Its a tie!";
  } else if (a === "paper") {
    if (b === "scissors") {
      return "You lose! Scissors beats Paper";
    } else if (b === "rock") {
      return "You win! Paper beats Rock";
    } else return "Its a tie!";
  } else if (a === "scissors") {
    if (b === "rock") {
      return "You lose! Rock beats Scissors";
    } else if (b === "paper") {
      return "You win! Scissors beats Paper";
    } else return "Its a tie!";
  } else {
    return "fuck";
  }
}

console.log(playRound(getplayerSelection(), getComputerChoice()));
