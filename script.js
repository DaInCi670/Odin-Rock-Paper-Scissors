"use strict";

//Global Variables
let playerScore = 0;
let computerScore = 0;

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
  if (a === b) {
    console.log(`Its a tie: You-${playerScore} : AI-${computerScore}`);
  } else if (a === "rock") {
    if (b === "scissors") {
      playerScore += 1;
      return console.log(
        `You Win! Rock beats Scissors: You-${playerScore} : AI-${computerScore}`
      );
    } else if (b === "paper") {
      computerScore += 1;
      return console.log(
        `You Lose! Paper beats Rock: You-${playerScore} : AI-${computerScore}`
      );
    }
  } else if (a === "paper") {
    if (b === "rock") {
      playerScore += 1;
      return console.log(
        `You Win! Paper beats Rock: You-${playerScore} : AI-${computerScore}`
      );
    } else if (b === "scissors") {
      computerScore += 1;
      return console.log(
        `You Lose! Scissors beats Paper: You-${playerScore} : AI-${computerScore}`
      );
    }
  } else if (a === "scissors") {
    if (b === "paper") {
      playerScore += 1;
      return console.log(
        `You Win! Rock beats Scissors: You-${playerScore} : AI-${computerScore}`
      );
    } else if (b === "rock") {
      computerScore += 1;
      return console.log(
        `You Lose! Rock beats Scissors: You-${playerScore} : AI-${computerScore}`
      );
    }
  }
}

//Function to play game 5 times and log scores
function playGame() {
  for (let i = 1; i <= 5; i++) {
    playRound(getplayerSelection(), getComputerChoice());
  }
  if (playerScore === computerScore) {
    console.log(
      `That was Close! Match Ended In A tie: You-${playerScore} : AI-${computerScore}`
    );
  }
  return playerScore > computerScore
    ? console.log(
        `Congratulations! You Won The Game: You-${playerScore} : AI-${computerScore}`
      )
    : console.log(
        `Oh No! You Lost The Game: You-${playerScore} : AI-${computerScore}`
      );
}

playGame();
