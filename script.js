"use strict";

//DOM constants
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const buttons = document.querySelectorAll(".button");

//Event Listeners for Buttons

buttons.forEach((btn) =>
	btn.addEventListener("click", function (e) {
		console.log(e.target.textContent);
	})
);

//Create Computer Choice
const computerChoice = function () {
	const random = Math.floor(Math.random() * 3);
	if (random === 0) return "rock";
	else if (random === 1) return "paper";
	else return "scissors";
};

//Play one round and return phrase
const playRound = function (compScore, userScore) {
	if (compScore === userScore) return "It's a Tie!";
	if (
		(compScore === "rock" && userScore === "scissors") ||
		(compScore === "scissors" && userScore === "paper") ||
		(compScore === "paper" && userScore === "rock")
	)
		return 0;
	else {
		return 1;
	}
};

//Outside variables to allow keping score
let compScore = 0;
let userScore = 0;

//playRound out of 5
// const game = function () {
// 	for (let i = 0; i < 5; i++) {
// 		//Variables to be iterated each time
// 		let compChoice = computerChoice();
// 		let userChoice = prompt(
// 			"Please enter rock, paper, or scissors please"
// 		).toLowerCase();
// 		//Refactor
// 		let play = playRound(compChoice, userChoice);

// 		//Check result of round and tally up
// 		if (play === 0) {
// 			compScore++;
// 			console.log(`You lost! Comp has ${compScore} points`);
// 		} else if (play === 1) {
// 			userScore++;
// 			console.log(`You won! User has ${userScore} points`);
// 		} else console.log(`Tie!`);

// 		//Results Comparison
// 		if (i === 4) {
// 			if (compScore > userScore) {
// 				console.log(`You Lost!
// Comp: ${compScore}
// You: ${userScore}`);
// 			} else if (userScore > compScore) {
// 				console.log(`You are Goated in the Sauce!
// Comp: ${compScore}
// You: ${userScore}`);
// 			} else {
// 				console.log(`It's a tie!
// Comp: ${compScore}
// You: ${userScore}`);
// 			}
// 		}
// 	}
// };

// game();
