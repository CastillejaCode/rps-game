"use strict";

//Create Computer Choice
//Rock = 0, Paper= 1, Scissors = 2
const computerChoice = function () {
	const random = Math.floor(Math.random() * 3);
	if (random === 0) return "rock";
	else if (random === 1) return "paper";
	else return "scissors";
};

//Retreive User Choice

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

//Best 3 out of 5
//Loop Over 5 times
//Add team variable
//If reach 3, then end and win
let comp = 0;
let user = 0;

const game = function () {
	for (let i = 0; i < 5; i++) {
		let compChoice = computerChoice();
		let userChoice = prompt(
			"Please enter rock, paper, or scissors please"
		).toLowerCase();

		if (playRound(compChoice, userChoice).includes("lost!")) {
			comp++;
			console.log(`Comp is ${comp}`);
		} else if (playRound(compChoice, userChoice).includes("won!")) {
			user++;
			console.log(`User is ${user}`);
		}
		if (i === 4) {
			if (comp > user) {
				console.log("You are the Loser!");
			} else if (user > comp) {
				console.log("You are Goated in the Sauce!");
			} else {
				console.log(`It's a tie!`);
			}
		}
	}
};

game();
