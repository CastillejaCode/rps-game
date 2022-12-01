"use strict";

//DOM constants
const rock = document.querySelector(".🪨");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const buttons = document.querySelectorAll(".button");
const results = document.querySelector(".results");

//Create Computer Choice
const computerChoice = function () {
	const random = Math.floor(Math.random() * 3);
	console.log(random);
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

//Event Listeners for Buttons
buttons.forEach((btn) =>
	btn.addEventListener("click", function (e) {
		const playerSelection = e.target.textContent;
		const game = playRound(playerSelection, computerChoice());
		if (game) {
			return (results.textContent = "Winner!");
		} else if (game === null) results.textContent = "Tie!";
		else results.textContent = "Loser!";
	})
);

//Outside variables to allow keping score
let comp = 0;
let user = 0;

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
