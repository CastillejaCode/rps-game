"use strict";

//Create Computer Choice
//Rock = 0, Paper= 1, Scissors = 2
const computerChoice = function () {
	const random = Math.floor(Math.random() * 3);
	if (random === 0) return "rock";
	else if (random === 1) return "paper";
	else return "scissors";
};

const compChoice = computerChoice();
console.log(compChoice);
//Retreive User Choice

const userChoice = prompt(
	"Please enter rock, paper, or scissors please"
).toLowerCase();
console.log(userChoice);

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

const play = playRound(compChoice, userChoice);

//Best 3 out of 5
//Loop Over 5 times
//Add team variable
//If reach 3, then end and win
let comp = 0;
let user = 0;

const game = () => {
	for (let i = 0; i < 5; i++) {
		if (comp >= 3) {
			return "You suck, the computer won!";
		}
		if (user >= 3) {
			return "You are GOATED in the SAUCE!";
		}

		if (play.includes("lost!")) {
			comp++;
		} else if (play.includes("won!")) {
			user++;
		}
	}
};