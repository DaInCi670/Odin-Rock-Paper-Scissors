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


