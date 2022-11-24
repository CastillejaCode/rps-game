"use strict";

//Create Computer Choice
const computerChoice = function () {
	const random = Math.floor(Math.random() * 3);
	if (random === 0) return "rock";
	else if (random === 1) return "paper";
	else return "scissors";
};

//Play one round and return phrase
const playRound = function (comp, user) {
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

//Outside variables to allow keping score
let comp = 0;
let user = 0;

const game = function () {
	for (let i = 0; i < 5; i++) {
		//Variables to be iterated each time
		let compChoice = computerChoice();
		let userChoice = prompt(
			"Please enter rock, paper, or scissors please"
		).toLowerCase();

		//Check result of round and tally up
		if (playRound(compChoice, userChoice).includes("lost!")) {
			comp++;
			console.log(`Comp has ${comp} points`);
		} else if (playRound(compChoice, userChoice).includes("won!")) {
			user++;
			console.log(`User has ${user} points`);
		} else console.log(`Tie!`);

		//Results Comparison
		if (i === 4) {
			if (comp > user) {
				console.log("You Lost!");
			} else if (user > comp) {
				console.log("You are Goated in the Sauce!");
			} else {
				console.log(`It's a tie!`);
			}
		}
	}
};

game();
