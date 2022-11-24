"use strict";

//Create Computer Choice
//Rock = 0, Paper= 1, Scissors = 2
let computerChoice = function () {
	const random = Math.floor(Math.random() * 3);
	if (random === 0) return "rock";
	else if (random === 1) return "paper";
	else return "scissors";
};

//Retreive User Choice

let playRound = function (comp, user) {
	if (comp === user) return "It's a Tie!";
	if (
		(comp === "rock" && user === "scissors") ||
		(comp === "scissors" && user === "paper") ||
		(comp === "paper" && user === "rock")
	)
		return "You lost!";
	else {
		return "You won!";
	}
};

//Best 3 out of 5
//Loop Over 5 times
//Add team variable
//If reach 3, then end and win
let comp = 0;
let user = 0;

const game = function () {
	for (let i = 0; i < 5; i++) {
		let compChoice1 = computerChoice();

		console.log(
			playRound(
				compChoice1,
				prompt("Please enter rock, paper, or scissors please").toLowerCase()
			)
		);
	}
};

game();
