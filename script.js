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
const round = document.querySelector(".round");
const btnRestart = document.querySelector(".restart-modal");
const modalWindow = document.querySelector(".modal");

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
let roundLimit = 5;
//Event Listeners for Buttons
buttons.forEach((btn) =>
	btn.addEventListener("click", function (e) {
		const playerSelection = e.target.textContent;
		const game = playRound(playerSelection, compSelection());
		i++;
		round.textContent = i;

		if (i === roundLimit) {
			if (user > comp) results.textContent = `You won the game!`;
			if (comp > user) results.textContent = `You lost the game!`;
			else results.textContent = "Tie...";

			modalWindow.classList.remove("hidden");
		} else if (game) {
			user++;
			subheader.textContent = `Winner!`;
			playerScore.textContent = `${user}`;
		} else if (game === null) {
			subheader.textContent = "Tie!";
		} else {
			comp++;
			subheader.textContent = "Loser!";
			compScore.textContent = `${comp}`;
		}
	})
);

btnRestart.addEventListener("click", function (e) {
	modalWindow.classList.add("hidden");
	compScore.textContent = comp = 0;
	playerScore.textContent = user = 0;
	round.textContent = i = 0;
});
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
