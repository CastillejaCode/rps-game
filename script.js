"use strict";

//DOM constants
const rock = document.querySelector(".🪨");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const buttons = document.querySelectorAll(".button");
const results = document.querySelector(".results");
const subheader = document.querySelector(".subheader");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");

//Create Computer Choice
const compSelection = function () {
	const random = Math.floor(Math.random() * 3);

	if (random === 0) return "🪨";
	else if (random === 1) return "📃";
	else return "✂️";
};

//Play one round and return phrase
const playRound = function (user, comp) {
	if (user === comp) return null;
	if (
		(user === "🪨" && comp === "✂️") ||
		(user === "✂️" && comp === "📃") ||
		(user === "📃" && comp === "🪨")
	)
		return true;
	else false;
};

let comp = 0;
let user = 0;
let i = 0;

//Event Listeners for Buttons
buttons.forEach((btn) =>
	btn.addEventListener("click", function (e) {
		const playerSelection = e.target.textContent;
		const game = playRound(playerSelection, compSelection());
		i++;
		console.log(`Round ${i}`);

		if (i === 5) {
			if (user > comp) subheader.textContent = `You won the game!`;
			if (comp > user) subheader.textContent = `You lost the game!`;
			else subheader.textContent = "Tie...";
		} else if (game) {
			user++;
			console.log(`User ${user}`);
			subheader.textContent = `Winner!`;
			playerScore.textContent = `${user}`;
		} else if (game === null) {
			subheader.textContent = "Tie!";
		} else {
			comp++;
			console.log(comp);
			subheader.textContent = "Loser!";
			compScore.textContent = `${comp}`;
		}
	})
);

//Outside variables to allow keping score

//playRound out of 5
// const game = function () {
// 	for (let i = 0; i < 5; i++) {
// 		//Variables to be iterated each time
// 		let compChoice = computerChoice();
// 		let userChoice = prompt(
// 			"Please enter 🪨, paper, or scissors please"
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
